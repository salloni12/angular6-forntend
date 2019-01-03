var User = require("../models/user");

var jwt=require('jsonwebtoken');

module.exports = (req, res) => {

    return {
        register: (req, res) => {
            //return res.send("hello get register method");
            console.log("received body is "+JSON.stringify(req.body))
            let userData = req.body;
            let user = new User(userData);
            user.save((error, registeredUser) => {
                if (error) {
                    console.log(error);
                }
                else {
                    let paylod = { subject: registeredUser._id };
                    let token = jwt.sign(paylod, 'secretkey');
                    res.status(200).send({ token });
                }
            })
        },

        login: (req, res) => {

            let userData = req.body;
            console.log("yoyo")
            console.log(JSON.stringify(req.body))
            User.findOne({ email: userData.email}, function (err, user) {
                if (err) {
                    console.log(err)
                }
                else {
                    if (!user) {

                        res.status(401).send('invalid email');

                    } else
                        if (user.password !== userData.password) {
                            res.status(401).send('invalid password');

                        }
                        else {
                            let paylod = { subject: user._id };
                            let token = jwt.sign(paylod, 'secretkey');
                            res.status(200).send({ token });

                        }

                }


            });
        }



    }
}