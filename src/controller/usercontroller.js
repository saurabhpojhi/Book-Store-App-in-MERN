const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

//  signup router

router.post('/signup', async (req, res) => {

    const { email, password, cpassword } = req.body;

    if (!email || !password || !cpassword) {
        return res.status(422).json({ error: " please fill the correct proprly" });
    }

    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: " Email already exits" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: " password are not matching" });

        } else {

            const user = new User({ email, password, cpassword });

            await user.save();

            res.status(201).json({ message: " user register successful" });
        }


    } catch (err) {
        console.log(err);

    }

});


//   Login route

router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: " please fill the data " });
        }

        const userLogin = await User.findOne({ email: email });

        console.log(userLogin);
        if (!userLogin){
            console.log('please enter correct email');
            res.json({ messe: " User not Signin  --" });
        }
        else{
        res.json({ messe: " User Signin Successfuly --" });}


    } catch (err) {
        console.log(err);
    }

});

module.exports = router;