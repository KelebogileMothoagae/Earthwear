import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {testConnection} from "./config/db.js"
import userRouters from "./routes/userRoutes.js"
import productRouters from "./routes/productRoutes.js"
const app= express();

//middleware
app.use(cors());
app.use(express.json());

//use routes
app.use("/api/auth",userRouters);
app.use("/api/products",productRouters);
//start server
app.listen(3000,async()=>{
    console.log("Server is running at port:3000....");

    //test db
   // await testConnection();
})