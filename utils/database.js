import mongoose from "mongoose";

let isconnected = false; //this will track the connection

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isconnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    });
    isconnected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log("something happened... ", error);
  }
};
