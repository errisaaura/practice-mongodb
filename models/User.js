import mongoose from "mongoose";

//schema untuk collections dari User
const User = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    umur: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required : [true, 'Email User harus diisi'],
    },
    password: {
        type: String,
        required : [true, 'Password User harus diisi'],
    },

})

//export model schema
export default mongoose.model('User', User)