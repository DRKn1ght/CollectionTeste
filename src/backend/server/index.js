import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import brandRoutes from './routes/brandRoutes.js'
import cors from 'cors'

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/brands", brandRoutes);

app.get("/", (req, res) => {
    res.send("API ligada");
})
app.listen(5000, ()=>{
    console.log("server ligado na porta 5000");
});