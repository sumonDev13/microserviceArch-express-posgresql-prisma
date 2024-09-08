import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:false}));

app.get('/',(req, res) =>{
    return res.JSON({message:`Yea we are running`})
});

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
});