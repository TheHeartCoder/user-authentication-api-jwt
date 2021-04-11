import express from 'express'
import dotenv from 'dotenv'
import moduleName from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
connectDB()
const app = express()


if(process.env.MODE === 'development'){
    app.use(morgan('dev'))  
}

app.use(express.json());
app.use('/api', userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${PORT}`))


