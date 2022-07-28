import mongoose from "mongoose";

//Buat schema (struktur databse nya)
const Product = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

//export model
export default mongoose.model('Products', Product) //mengambil model Products yang nantinya akan masuk ke dalam collection product
