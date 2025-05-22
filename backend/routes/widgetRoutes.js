import express from 'express';
import { getWeather, getCrypto, getNews } from '../controllers/widgetController.js';

const router = express.Router();

router.get('/weather', getWeather);
router.get('/crypto', getCrypto);
router.get('/news', getNews);

export default router;
