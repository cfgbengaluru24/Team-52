import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './database/db.js';
import cors from 'cors';

dotenv.config();


const app=express();
app.use(express.json());
app.use(cors());

const port=process.env.PORT ;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

/*app.use("/uploads",express.static('uploads'));*/

import userRoutes from './routes/user.js';
//import courseRoutes from './routes/course.js';*/
import adminRoutes from './routes/admin.js';
import flwRoutes from './routes/flw.js';
import mappingRoutes from './routes/mapping.js';

app.use('/api',userRoutes);
//app.use('/api',courseRoutes);
app.use('/api',adminRoutes);
app.use("/api",flwRoutes);
app

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
})