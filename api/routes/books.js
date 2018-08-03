const express = require('express');
const mongoose = require('mongoose');
const Books = require('../models/books');

const router = express.Router();

router.get('/', (req, res, next) => {

    Books.find()
        .exec()
        .then(doc => {
            res.status(200).json({

                message: doc

            })
        })
        .catch(err => {
            error: err
        });


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

        })
        .catch(err => {
            console.log(err)
        });

    res.status(200).json({
        message: books
    })
});

router.get('/:booksid', (req, res, next) => {

    const id = req.params.booksid;

    //console.log(id);

    Books.findById(id)
        .exec()
        .then(doc => {

            if (doc) {
                res.status(200).json({
                    message: doc
                })

            } else {
                res.status(200).json({
                    message: "Data is not exists for this id"
                })
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                eroor: err
            })
        });


    // if (url == 'Total Number of books') {
    //     res.status(200).json({
    //         message: "Total Number of books are 400000 approximately"
    //     })
    // }

    // if (url == 'Number of avaiable books') {
    //     res.status(200).json({
    //         message: "Number of avaiable books are 200000 approximately"
    //     })
    // }

    // if (url == 'How many number of books you are borred') {
    //     res.status(200).json({
    //             message: "Total Number of books you are borred 40 maximum"
    //         })
    //         // } else {
    //         //     res.status(200).json({
    //         //         message: "url is incorrect.please enter correct url"
    //         //     })
    // }


})


router.patch('/:booksid', (req, res, next) => {

    const id = req.params.booksid;
    console.log(id)

    Books.findByIdAndUpdate({ _id: id }, req.body)
        .then(doc => {
            res.status(200).json({
                message: doc
            })
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        });

    // const updateops = {};

    // for (const ops of req.body) {
    //     updateops[ops.propName] = ops.value;
    // }

    // Books.update({ _id: id }, { $set: updateops })
    //     .exec()
    //     .then(doc => {
    //         res.status(200).json({
    //             message: doc
    //         })
    //     })
    //     .catch(err => {
    //         res.status(404).json({
    //             error: err
    //         })
    //     });

})

router.delete('/:booksid', (req, res, next) => {

    const id = req.params.booksid;

    Books.remove({ _id: id })
        .exec()
        .then(doc => {
            res.status(200).json({
                message: doc
            })
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        });

})


module.exports = router;