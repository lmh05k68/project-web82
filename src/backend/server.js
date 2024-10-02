import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
dotenv.config();

//App config
const app = express();
const port = process.env.PORT ||3000
connectDB();
connectCloudinary

//middlewares
app.use(express.json());
app.use(cors({
    origin: '*', // Cho phép mọi nguồn truy cập. Nếu cần bảo mật, cấu hình cụ thể URL frontend.
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
//api endpoints

app.use('/api/user',userRouter);



app.get('/', (req,res) => {
    res.send('API Working')
})

app.listen(port , () => {
    console.log('Server is running');
})