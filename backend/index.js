import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './Routes/Productroutes.js';
dotenv.config();

const app = express();
const port = process.env.PORT;
const corsOptions = {
    origin: true,
    credentials: true
};

mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongodb database connected');
    } catch (err) {
        console.error('Mongodb database connection failed', err);
    }
};
app.use(router);
app.use(express.json());
app.use(cors(corsOptions));

app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});
