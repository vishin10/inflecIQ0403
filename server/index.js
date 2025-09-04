require('dotenv/config');
const path = require('path');
const express = require('express');
const cors = require('cors');
const uploadResumeRoute = require('./routes/uploadResume'); // Fixed path - removed 'server/'

const app = express();

// CORS: allow your site origin in case you ever cross-origin
app.use(cors({ origin: process.env.WEB_ORIGIN || true }));

// Add body parsing middleware (important!)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health checks
app.get('/healthz', (_req, res) => res.send('ok'));
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// API routes
app.use('/api', uploadResumeRoute);

// Serve the built React app
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

// Start
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Web+API listening on http://localhost:${port}`);
});