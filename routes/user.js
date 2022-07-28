import  express  from "express";
// import { get } from "mongoose";

import {
    getUser,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
    
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', getUser)
router.get('/:id', getUserById)
router.post('/', saveUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router