const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

const allowed = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

router.post('/uploadResume', upload.single('resume'), async (req, res) => {
  const file = req.file;
  const { fullName = '', email = '', position = '', otherRole = '', message = '' } = req.body;

  try {
    if (!file) return res.status(400).send('Missing file');
    if (!allowed.has(file.mimetype)) return res.status(400).send(`Unsupported file type: ${file.mimetype}`);
    if (!fullName || !email) return res.status(400).send('Missing applicant info (name/email)');

    const roleLabel = (position === 'other' && (otherRole || '').trim())
      ? `Other – ${(otherRole || '').trim()}`
      : position;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_PORT === '465',
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD },
    });

    await transporter.verify().catch((e) => {
      throw new Error(`SMTP verify failed: ${e && e.message ? e.message : String(e)}`);
    });

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

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'hr@infleciq.org',
      subject: `New Application – ${roleLabel} – ${fullName}`,
      html,
      attachments: [{
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      }],
    });

    return res.status(200).send('OK');
  } catch (err) {
    console.error('[UPLOAD ERROR]', { message: err && err.message, code: err && err.code });
    return res.status(500).send((err && err.message) || 'Internal Server Error');
  }
});

module.exports = router;
