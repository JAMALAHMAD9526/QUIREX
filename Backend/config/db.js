import mongoose from "mongoose"
export const dbConnect=async()=>{
   const conn= await  mongoose.connect('mongodb+srv://jamalahmad9526_db_user:cQbfELjbGlWwV8SF@cluster0.v8rng5e.mongodb.net/quirex?appName=Cluster0');
   if(conn){
    console.log("Db connected successfully............"); 
   }
}