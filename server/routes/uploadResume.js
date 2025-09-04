const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');

const router = express.Router();

// Configure multer with better error handling
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowed = new Set([
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]);
    
    if (allowed.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Unsupported file type: ${file.mimetype}`), false);
    }
  }
});

// Middleware to handle multer errors
const handleUpload = (req, res, next) => {
  upload.single('resume')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large. Maximum size is 10MB.' });
      }
      return res.status(400).json({ error: `Upload error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

router.post('/uploadResume', handleUpload, async (req, res) => {
  const file = req.file;
  const { fullName = '', email = '', position = '', otherRole = '', message = '' } = req.body;

  console.log('Upload request received:', {
    file: file ? { name: file.originalname, size: file.size, type: file.mimetype } : 'no file',
    fullName,
    email,
    position
  });

  try {
    // Validation
    if (!file) {
      return res.status(400).json({ error: 'Missing file' });
    }
    if (!fullName || !email) {
      return res.status(400).json({ error: 'Missing required fields: name and email' });
    }
    if (!position) {
      return res.status(400).json({ error: 'Please select a position' });
    }

    const roleLabel = (position === 'other' && (otherRole || '').trim())
      ? `Other – ${(otherRole || '').trim()}`
      : position;

    // Check required environment variables
    const requiredEnvVars = ['MAIL_HOST', 'MAIL_PORT', 'MAIL_USER', 'MAIL_PASSWORD'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('Missing environment variables:', missingVars);
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_PORT === '465',
      auth: { 
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASSWORD 
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (smtpError) {
      console.error('SMTP verification failed:', smtpError);
      return res.status(500).json({ error: 'Email service unavailable' });
    }

    // HTML escape function
    const esc = (s = '') =>
      s.replaceAll('&', '&amp;')
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

    // Send email
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: 'hr@infleciq.org',
      subject: `New Application – ${roleLabel} – ${fullName}`,
      html,
      attachments: [{
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      }],
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return res.status(200).json({ success: true, message: 'Application submitted successfully' });

  } catch (err) {
    console.error('[UPLOAD ERROR]', { 
      message: err?.message || 'Unknown error', 
      stack: err?.stack,
      code: err?.code 
    });
    return res.status(500).json({ 
      error: 'Failed to process application. Please try again.' 
    });
  }
});

module.exports = router;