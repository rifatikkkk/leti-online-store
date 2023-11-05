import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import orderRoute from './routes/orderRoute.js'

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'))
app.use(cookieParser());


// Constants
const PORT = process.env.PORT || 3002;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;

// Routes
// http://localhost:3001/api/product
app.use('/api/product', productRoute);

// http://localhost:3001/api/user
app.use('/api/user', userRoute);

// http://localhost:3001/api/order
app.use('/api/order', orderRoute);



async function start() {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.xpeso2j.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        console.log('Server connected with DataBase');
        app.listen(PORT, (req, res) => {
            // var url = req.headers.host + '/' + req.url;
            console.log("Server started on " + PORT);
        })
    } catch (error) {
        console.log(error)
    }
}

start()