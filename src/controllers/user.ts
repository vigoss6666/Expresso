import {Request,Response} from 'express'; 
import {default as User} from '../models/user'; 


export let readUser = (req:Request, res:Response)=>{
  
   User.find({name:"zaid"}, (err,data)=>{
        if (err){
             res.send(err); 
        }
        res.send(data)
   })

}

export let deleteUser = (req:Request, res:Response) => {
    
      User.deleteOne({name:"zaid"}, (err)=>{
           if(err) res.send(err); 
           res.send("The user have been deleted"); 
      })
}

export let updateUser = (req:Request, res:Response) => {
    
      User.deleteOne({name:"zaid"}, (err)=>{
           if(err) res.send(err); 
           res.send("The user have been deleted"); 
      })
     
}

export let addUser = (req:Request , res:Response) => {
 
      let user = new User({name:req.body.name, surname:req.body.surname}); 
      user.save((err)=>{
           if(err) res.send(err); 
           res.send(`The user with the name ${req.body.name} has been saved`); 
      })   
}