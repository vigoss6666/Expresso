import express from "express";
import mongo from "connect-mongo";
import path from "path";
import mongoose from "mongoose";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";



import * as homeController from "./controllers/home";



const app = express();


app.set("port", process.env.PORT || 3000);


app.get("/", homeController.index);



export default app;