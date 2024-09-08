import express from "express";
import { config } from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";

config();
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req, res) =>{
    return res.JSON({message:`Yea we are running`})
});

app.use('/users',authRouter)

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
});