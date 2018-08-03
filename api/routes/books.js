const express = require('express');
const mongoose = require('mongoose');
const Books = require('../models/books');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({

        item1: " Total Number of books ? ",
        item2: " Number of avaiable books ? ",
        item3: " How many number of books you are borred ? ",
        item4: " Which books are avaiable ? ",

    })
});

router.post('/', (req, res, next) => {

    // const books = {

    //     // booksId: req.body.booksId,
    //     // name: req.body.name

    //     Total_Number_of_books: req.body.Total_Number_of_books,
    //     Number_of_avaiable_books: req.body.Number_of_avaiable_books,
    //     How_many_number_of_books_you_are_borred: req.body.How_many_number_of_books_you_are_borred,
    //     Which_books_are_avaiable: req.body.Which_books_are_avaiable

    // };

    const books = new Books({
        _id: new mongoose.Types.ObjectId(),
        key: req.body.key,
        values: req.body.values

    });

    books.save()
        .then(result => {

            console.log(result)
        })
        .catch(err => {
            console.log(err)
        });

    res.status(200).json({
        message: books
    })
});

router.get('/:booksid', (req, res, next) => {

    const url = req.params.booksid;

    console.log(url);

    if (url == 'Total Number of books') {
        res.status(200).json({
            message: "Total Number of books are 400000 approximately"
        })
    }

    if (url == 'Number of avaiable books') {
        res.status(200).json({
            message: "Number of avaiable books are 200000 approximately"
        })
    }

    if (url == 'How many number of books you are borred') {
        res.status(200).json({
                message: "Total Number of books you are borred 40 maximum"
            })
            // } else {
            //     res.status(200).json({
            //         message: "url is incorrect.please enter correct url"
            //     })
    }


})


router.patch('/:booksid', (req, res, next) => {

    res.status(200).json({
        message: "update information"
    })
})

router.delete('/:booksid', (req, res, next) => {

    res.status(200).json({
        message: "delete information"
    })
})


module.exports = router;