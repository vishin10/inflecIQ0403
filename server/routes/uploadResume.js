import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import fs from 'fs';

const router = express.Router();

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
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
    if (!allowed.has(file.mimetype)) {
      fs.unlink(file.path, () => {});
      return res.status(400).send(`Unsupported file type: ${file.mimetype}`);
    }
    if (!fullName || !email) {
      fs.unlink(file.path, () => {});
      return res.status(400).send('Missing applicant info (name/email)');
    }

    const roleLabel = position === 'other' && otherRole?.trim() ? `Other – ${otherRole.trim()}` : position;

    // Log what we got (safe)
    console.log('[UPLOAD]', { fullName, email, roleLabel, file: file.originalname, mimetype: file.mimetype });

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_PORT === '465', // 465 => true, 587 => false
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD },
    });

    // Verify SMTP first (surface clearly if Zoho creds are wrong)
    await transporter.verify().catch((e) => {
      throw new Error(`SMTP verify failed: ${e?.message || e}`);
    });

    const esc = (s = '') =>
      s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

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
      from: process.env.MAIL_USER,             // use your Zoho mailbox as "from"
      to: 'hr@infleciq.org',
      subject: `New Application – ${roleLabel} – ${fullName}`,
      html,
      attachments: [{ filename: file.originalname, path: file.path, contentType: file.mimetype }],
    });

    fs.unlink(file.path, () => {}); // cleanup
    return res.status(200).send('OK');
  } catch (err) {
    console.error('[UPLOAD ERROR]', err);
    if (file?.path) fs.unlink(file.path, () => {}); // cleanup on error
    // Send a readable error to the frontend so your banner shows something useful
    return res.status(500).send(err?.message || 'Internal Server Error');
  }
});

export default router;
