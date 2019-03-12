import mongoose from "mongoose";


const DogsSchema = new mongoose.Schema({
     name:String, 
     owner:String, 
     breed:String, 
     age:Number, 
     

})

const Dogs = mongoose.model("Dogs", DogsSchema); 
const silent = new Dogs({name:'zaid', owner:'zaid', breed:"alsasion", age:18}); 
export default Dogs; 


