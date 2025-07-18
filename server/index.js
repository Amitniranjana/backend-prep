import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app=express();
app.use(cors());
app.get('/' , (req , res)=>{
res.send("Amit niranjan");
})
app.use(express.json());
import userRouter from "./routes/user.routes.js"
app.use('/api/v1/users' , userRouter);

app.listen(process.env.PORT ||5000 , ()=>{
    console.log(`server running on port ${process.env.PORT||5000}`);
})
