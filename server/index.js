// server/index.js

import express from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') }); 

console.log('[ENV CHECK]', {
  NODE_ENV: process.env.NODE_ENV,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_USER: !!process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD ? '***' : '',
  MAIL_FROM: process.env.MAIL_FROM,
  MAIL_TO: process.env.MAIL_TO,
});


const { memoryStorage, MulterError } = multer;

const app = express();

// CORS
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['https://infleciq.com', 'https://www.infleciq.com']
        : true,
  })
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup
const upload = multer({
  storage: memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb) => {
    const allowed = new Set([
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]);
    if (allowed.has(file.mimetype)) cb(null, true);
    else cb(new Error(`Unsupported file type: ${file.mimetype}`), false);
  },
});

// Multer error wrapper
const handleUpload = (req, res, next) => {
  upload.single('resume')(req, res, (err) => {
    if (err instanceof MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large. Max 10MB.' });
      }
      return res.status(400).json({ error: `Upload error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

// Health
app.get('/healthz', (_req, res) => res.send('ok'));
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Upload route
app.post('/api/uploadResume', handleUpload, async (req, res) => {
  const file = req.file;
  const {
    fullName = '',
    email = '',
    position = '',
    otherRole = '',
    message = '',
  } = req.body;

  console.log('Upload request:', {
    file: file ? { name: file.originalname, size: file.size, type: file.mimetype } : 'no file',
    fullName,
    email,
    position,
  });

  try {
    // Basic validation
    if (!file) return res.status(400).json({ error: 'Missing file' });
    if (!fullName || !email) return res.status(400).json({ error: 'Missing name or email' });
    if (!position) return res.status(400).json({ error: 'Please select a position' });

    const roleLabel =
      position === 'other' && (otherRole || '').trim()
        ? `Other – ${(otherRole || '').trim()}`
        : position;

    // Required env
    const required = ['MAIL_HOST', 'MAIL_PORT', 'MAIL_USER', 'MAIL_PASSWORD', 'MAIL_FROM', 'MAIL_TO'];
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length) {
      console.error('Missing env:', missing);
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Nodemailer (CommonJS default import)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_PORT === '465',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Verify SMTP
    try {
      await transporter.verify();
      console.log('SMTP verified');
    } catch (e) {
      console.error('SMTP verification failed:', e);
      return res.status(500).json({ error: 'Email service unavailable' });
    }

    // Escape HTML
    const esc = (s = '') =>
      s
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');

    const html = `
      <p>New job application received.</p>
      <ul>
        <li><b>Name:</b> ${esc(fullName)}</li>
        <li><b>Email:</b> ${esc(email)}</li>
        <li><b>Position:</b> ${esc(roleLabel)}</li>
      </ul>
      ${message ? `<p><b>Message:</b><br/>${esc(message).replace(/\n/g, '<br/>')}</p>` : ''}
    `;

  await transporter.sendMail({
  from: process.env.MAIL_FROM,     // must be your Zoho mailbox or a verified alias
  to: process.env.MAIL_TO,         // hr@infleciq.org
  replyTo: email,                  // <-- candidate's email from the form
  subject: `New Application – ${roleLabel} – ${fullName}`,
  html,
  attachments: [
    {
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype,
    },
  ],
});


    console.log('Email sent');
    return res.status(200).json({ success: true, message: 'Application submitted successfully' });
  } catch (err) {
    console.error('[UPLOAD ERROR]', {
      message: err?.message || 'Unknown error',
      stack: err?.stack,
      code: err?.code,
    });
    return res.status(500).json({ error: 'Failed to process application. Please try again.' });
  }
});

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  // If your dist is at project root, from server/ it’s one level up:
  const distDir = join(__dirname, '../dist');
  app.use(express.static(distDir));

  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(join(distDir, 'index.html'));
  });
}

// Port (Render uses PORT)
const port = process.env.PORT || 4000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
