import express from 'express';
import { getCrypto, getNews, getWeather } from '../controllers/widgetcontroller.js';

const router = express.Router();

router.get('/weather', getWeather);
router.get('/crypto', getCrypto);
router.get('/news', getNews);

export default router;
