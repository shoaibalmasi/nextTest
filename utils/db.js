import mongoose from "mongoose";

const uri = "mongodb+srv://test:test1234@cluster0.d4pz6sm.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
    await mongoose.connect(uri)
    console.log('Connected');
}

const db = {connect}
export default db