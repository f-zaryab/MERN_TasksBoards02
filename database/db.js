import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Successfully connected to DB: MongoDb :)"))
    .catch((error) => {
      console.log("Unable to connect to DB");
      console.log(error);
    });
};

export default connectDB;