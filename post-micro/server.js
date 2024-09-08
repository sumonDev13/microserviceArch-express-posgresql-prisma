import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';

config();
const app = express();
const PORT = process.env.PORT || 3000;


//middlewares
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    return res.json({message:`yes its post server and it is running`});
})

app.listen(PORT,()=>{
    console.log(`Post server listening on ${PORT}`);
});