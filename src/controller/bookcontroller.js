const express = require('express');
const router = express.Router();

require('../db/conn');

const Bookstore = require('../model/bookstoreSchema');


//  bookstore postmethod router 

router.post('/postbook', async (req, res) => {

    const { Title, Author, publisher, isbn, price, category, imgurl } = req.body;

    if (!Title || !Author || !publisher || !isbn || !price || !category || !imgurl) {
        return res.status(422).json({ error: " please fill the correct proprly" });
    }

    try {
        const bookExist = await Bookstore.findOne({ Title: Title })

        if (bookExist) {
            return res.status(422).json({ error: " Book already exits" });
        } else {

            const bookstore = new Bookstore({ Title, Author, publisher, isbn, price, category, imgurl });

            await bookstore.save();

            res.status(201).json({ message: " book register  successful" });
        }


    } catch (err) {
        console.log(err);

    }

});

//  get methos is  is woring     

//    router.get('/getbook', async (req, res) => {
//     const bb = await Bookstore.find();

//     res.send(bb)
// });


      //  get method throw searchbook or get book

router.post('/getbookstore', async (req, res) => {

    try {
        const { Title, Author  } = req.body;

        if (!Title || !Author) {
            return res.status(400).json({ error: " please fill the data " });
        }

        const bookstoreget = await Bookstore.find({ Title: Title  });

        console.log(bookstoreget);
        if (!bookstoreget){
            console.log('please enter correct Title');
            res.json({ messe: " User not Signin  --" });
        }
        else{
        res.json({ messe: " User Signin Successfuly --" });}


    } catch (err) {
        console.log(err);
    }

});


module.exports = router;