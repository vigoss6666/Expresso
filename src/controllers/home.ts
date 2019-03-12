import { Request, Response } from "express";
import {default as Dogs} from '../models/Dogs'; 

export let index = (req: Request, res: Response) => {
   
     const Dog = new Dogs({name:"zaid", owner:"zaid", breed:"alsi", age:10}); 
     Dog.save((err)=>{
        if(err) res.send(err);
      Dogs.find((err,dogs)=>{
         if(err) res.send(err); 
         res.send(dogs)
      })
     })
     
  
};
