// - As early as possible in your application, import and configure dotenv:
// require('dotenv').config({path: './env'})// env is in home directory

// for consistency we need to use import

import dotenv from 'dotenv'; //config it down there
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({ 
    path: "./env" 
});



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server listening on ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED !!!" , err);
}
)










/* FIRST APPROCH OF CONNECTING DB
import express from "express";
const app = express();
( async () =>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERROR:", error);
        throw err;

        app.listen(process.env.PORT , ()=>{

            console.log(`App is listning on port ${process.env.PORT}`);
        })

       })
    } catch (error) {
        console.error("ERROR: " , error);
        throw err
    }
})() //iffy 
*/  