import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import userRouter from "./src/routes/routes";

dotenv.config({ path: '.env' });

mongoose.connect(`${process.env.DATABASE_URI}`);

try {
  // connecting to MongoDB
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
} catch (error) {
  console.error(`Error connecting to MongoDB: ${error}`);
}

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
const corsOptions = {
  origin: "*", // Allow requests from this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

