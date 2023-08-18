import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(
      "mongodb.js 4 | mongoose connection state",
      mongoose.connection.readyState
    );
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("mongodb.js 6 | db connected!");
    }
  } catch (error) {
    console.log("mongodb.js 9 | error connecting to db");
  }
};

export default connectDB;
