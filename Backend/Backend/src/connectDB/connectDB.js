/*import mongoose from "mongoose"
/*import MERN from "../constant.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }  
}
export default connectDB*/

import mongoose from "mongoose";
import  {DB_NAME}  from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://munnak0995:dcCKQlPiUdShCZfz@cluster0.0lozz.mongodb.net/)`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
};

export default connectDB;
