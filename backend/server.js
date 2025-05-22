import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import widgetRoutes from './routes/widgetRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/widgets', widgetRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)))
  .catch((err) => console.error(err));
