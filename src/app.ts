import express from "express";
import mongo from "connect-mongo";
import path from "path";
import mongoose from "mongoose";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";
import bodyParser from 'body-parser'; 
import * as homeController from "./controllers/home";
import * as user from "./controllers/user"; 
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
   

const app = express();
app.use(bodyParser());

app.set("port", process.env.PORT || 3000);


app.get("/", homeController.index);
app.post("/user",user.addUser ); 
app.get("/user", user.readUser); 
app.delete("/user", user.deleteUser);




export default app;