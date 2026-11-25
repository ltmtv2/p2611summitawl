import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get(['/', '/index.html'], (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get(['/speakereinladung', '/speakereinladung/', '/speakereinladung/index.html'], (_req, res) => {
  res.sendFile(path.join(__dirname, 'speakereinladung', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
