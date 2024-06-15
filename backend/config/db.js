import mongoose from "mongoose";

export const connectDB = async () => {
    await  mongoose.connect('mongodb+srv://nisthakajoria:nistha1234K@cluster0.6lzo49e.mongodb.net/Food-Delivery-App').then(()=>console.log("DB Connected"));

}