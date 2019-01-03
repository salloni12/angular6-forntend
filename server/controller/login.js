var mongoose = require('mongoose');

var express = require('express');
var app=express();
var router = express.Router();
//app.use("/api",router);

//var jwt=require('jsonwebtoken');

var loginservice=require("../services/login.service");

module.exports=(app)=>{
    app.post('/register',(req,res)=>{
        //return res.send("hello get register method");
        loginservice().register(req,res);
        

    })

    app.post('/login',(req,res)=>{
        console.log("honey singh "+JSON.stringify(req.body))

        loginservice().login(req,res);
    })
}




// router.post('/register',(req,res)=>{

//     let userData=req.body;
//     let user=new User(userData);
//     user.save((error,registeredUser)=>{
//         if(error){
//             console.log(error);
//         }
//         else{
//             let paylod={subject:registeredUser._id};
//             let token=jwt.sign(paylod,'secretkey');
//             res.status(200).send({token});
//         }
//     })
// });

// router.post('/login',(req,res)=>{

//     let userData=req.body;
//     User.findOne({email:userData.email},function(err,user){
//         if(err)
//          {
//           console.log(err)
//          }
//          else{
//           if(!user){
        
//             res.status(401).send('invalid email');
           
//          }else
//          if(user.password !==userData.password){
//             res.status(401).send('invalid password');
            
//          }
//          else
//         {
//             let paylod={subject:user._id};
//             let token=jwt.sign(paylod,'secretkey');
//             res.status(200).send({token});
            
//         }
        
//         }
        
     
//      });
// })
