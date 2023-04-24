import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {type:String , required: true},
    password: {type:String , required: true},
    isAdmin:  {type:Boolean , required: true, default: false},
})

export default mongoose.model('User', )