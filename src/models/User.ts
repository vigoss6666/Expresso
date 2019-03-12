import mongoose from 'mongoose'; 

const UserSchema = new mongoose.Schema({
     
   name:String, 
   surname:String, 
   age:Number

})


const User = mongoose.model('User', UserSchema); 
export default User; 


