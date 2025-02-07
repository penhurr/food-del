import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://goFood:Password%40goFood1@gofood.a6anl.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


