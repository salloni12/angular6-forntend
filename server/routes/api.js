var express = require('express');

var router = express.Router();

var jwt=require('jsonwebtoken');

// var MongoClient = require('mongodb').MongoClient;


var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }


});

var User = mongoose.model('User', userSchema);




router.post('/register',(req,res)=>{

    let userData=req.body;
    let user=new User(userData);
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error);
            
        }
        else{
            let paylod={subject:registeredUser._id};
            let token=jwt.sign(paylod,'secretkey');
            res.status(200).send({token});
        }
    })
});

router.post('/login',(req,res)=>{

    let userData=req.body;
    User.findOne({email:userData.email},function(err,user){
        if(err)
         {
          //console.log(err)
          alert("register please");
         }
         else{
          if(!user){
            alert("invalid emailid");
            res.status(401).send('invalid email');
           
         }else
         if(user.password !==userData.password){
            res.status(401).send('invalid password');
            
         }
         else
        {
            let paylod={subject:user._id};
            let token=jwt.sign(paylod,'secretkey');
            res.status(200).send({token});
            
        }
        
        }
        
     
     });
})

module.exports = router;
