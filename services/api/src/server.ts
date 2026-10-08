import express from 'express';
import { quoteLane } from './billing';
import { createOrder } from './orders';

const app = express();
app.use(express.json());
app.get('/health', (_request, response) => { response.json({ service: 'northline-api' }); });
app.get('/lanes/:lane/quote', quoteLane);
app.post('/orders', createOrder);

const port = Number(process.env.PORT || 8080);
app.listen(port);
