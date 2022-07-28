import express  from "express";
import mongoose from "mongoose";
import routerProduck from "./routes/product.js"
import routerUser from "./routes/user.js";
import cors  from "cors";

const app = express()
// const mongoose = require('mongoose')

//koneksi ke db (membuat db secara otomatis)
mongoose.connect("mongodb://127.0.0.1:27017/restful_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
const db = mongoose.connection
db.on('error', (error)=> console.log(error));
db.once('open', () => console.log('Database Connected'))

//middleware
app.use(cors())
app.use(express.json())
app.use('/product', routerProduck)
app.use('/user', routerUser )

//atur port
app.listen('3000', () => console.log('Server Running at port 3000'))