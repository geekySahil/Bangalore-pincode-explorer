import express from 'express';
import cors from 'cors';
import pincodeRoutes from './routes/pincodeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get(['/', '/api'], (req, res) => {
  res.json({ message: 'Bangalore Pincode Explorer API is running' });
});

app.use('/api', pincodeRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong on the server' });
});

export default app;
