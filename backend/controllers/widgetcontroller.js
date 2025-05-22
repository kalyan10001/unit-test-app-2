import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Needed to get __dirname with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to load JSON from file
const loadJSON = (filename) =>
  JSON.parse(fs.readFileSync(path.join(__dirname, '../data', filename), 'utf-8'));

export const getWeather = (req, res) => {
  const data = loadJSON('weather.json');
  res.json(data);
};

export const getCrypto = (req, res) => {
  const data = loadJSON('crypto.json');
  res.json(data);
};

export const getNews = (req, res) => {
  const data = loadJSON('news.json');
  res.json(data);
};
