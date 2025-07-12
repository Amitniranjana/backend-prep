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

app.listen(process.env.PORT ||5000 , ()=>{
    console.log(`server running on port ${process.env.PORT||5000}`);
})
