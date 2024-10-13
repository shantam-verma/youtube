import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;

connectDB()
  .then(() =>
    app.listen(port, () => console.log(`Server is running at port : ${port}`))
  )
  .catch((error) => console.log("Mongo db connection failed!", error));

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.log("Error: ", error);
//     throw err;
//   }
// })();
