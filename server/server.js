var express = require('express');
var app =express();
// var router=require('../server/routes/api');

 var bodyParser=require('body-parser');


 var login=require("./controller/login");
var cors=require('cors');



app.use(cors());
//mongodb connection 
 var mongoose=require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/users');

//on connection
mongoose.connection.on('connected',()=>{
    console.log("connected to database @mongodb at port 27017");
});

mongoose.connection.on('error',(err)=>{
    if (err){
        console.log('error in database'+err);
    }

});

var port=3000;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.get('/api', (req, res) => {
    
   return res.send("hello get method");
});

login(app);
app.listen(port, () => {
   console.log(`Server started on :`+port);
});
