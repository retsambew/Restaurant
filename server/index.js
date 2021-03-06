import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import FoodRoute from './routes/food.js';
import BookRoute from './routes/booking.js';
import OrderRoute from './routes/orders.js';

const app = express();

app.use(cors());
app.use('/food',FoodRoute);
app.use('/book',BookRoute);
app.use('/order',OrderRoute);
dotenv.config();

const CONNECTION_URL= `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kn8rk.mongodb.net/test
`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch( (error) => console.log(error.message));