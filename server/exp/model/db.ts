import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const URL: string = process.env.DB_URL as string;
try {
  mongoose.connect(URL);
  console.log("connection to database was successful");
} catch (error) {
  console.log(error);
}
export default mongoose;