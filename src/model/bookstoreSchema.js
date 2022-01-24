const mongoose = require('mongoose');

bookstoreSchema = new mongoose.Schema( 
        {
        
            Title: {
                type: String,
                required: true
            },
            Author: {
                type: String,
                required: true
            },
            publisher: {
                type: String,
                required: true
            },
            isbn: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            imgurl: {
                type: String,
                required: true
            }

})

const Bookstore = mongoose.model('BOOKSTORE', bookstoreSchema);

module.exports = Bookstore;
