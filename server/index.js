import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import uploadResumeRoute from './routes/uploadResume.js';

const app = express();


app.use(cors({
  origin: process.env.WEB_ORIGIN || true,
}));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api', uploadResumeRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
