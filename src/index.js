import "dotenv/config";
import connectDB from "./db/index.js";

connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.log("Error: ", error);
//     throw err;
//   }
// })();
