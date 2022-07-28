import User from "../models/user.js";

//get all user
export const getUser = async (req,res) => {
    try{
        const user = await User.find()
        res.json(user)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//get single user
export const getUserById = async (req,res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch (error) {
        res.status(404).json({message: error.message})
    }
}

//create user
export const saveUser = async (req,res) => {
    const user = new User(req.body)
    try{
        const saveUser = await  user.save()
        res.statis(201).json(saveUser)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

//update user
export const updateUser = async (req,res) => {
    const cekId = await User.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"})
    try{
        const updateUser = await User.updateOne({_id : req.params.id}, {$set: req.body})
        res.status(200).json(updateUser)
    }catch(error) {
        res.status(400).json({message : error.message})
    }
}

//delete User
export const deleteUser = async (req,res) => {
    const cekId = await User.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"})
    try {
        const deleteUser = await User.deleteOne({_id : req.params.id})
        res.status(200).json(deleteUser)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
}