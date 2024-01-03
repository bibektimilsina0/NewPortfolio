import mongoose from 'mongoose'
import {MongoClient} from 'mongodb'
 let isconnected=false
 // Create a MongoDB client instance
export const client = new MongoClient(process.env.MONGO_URL);
 
export const  connectToDB=async()=>{
    mongoose.set('strictQuery',true)
     if(!isconnected){
        console.log("mongodb already connected")
     }
     try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isconnected=true;
        console.log("mongodb connected")
     } catch (error) {
        console.log(error)
     }
}
