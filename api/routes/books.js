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
            console.log(err);
            res.status(500).json({
                eroor: err
            })
        });


});

router.post('/', (req, res, next) => {


    const books = new Books({
        _id: new mongoose.Types.ObjectId(),
        key: req.body.key,
        values: req.body.values

    });

    books.save()
        .then(result => {

            res.status(200).json({
                message: books
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                eroor: err
            })
        });


});

router.get('/:booksid', (req, res, next) => {

    const id = req.params.booksid;
    //console.log(id);

    console.log(id);
    // var rudb = db.db("ru_web");

    var query = {
        key: id
    }


    Books.find(query)
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


})


router.patch('/:booksid', (req, res, next) => {

    const id = req.params.booksid;
    //console.log(id)

    Books.findByIdAndUpdate({ _id: id }, req.body)
        .then(doc => {
            res.status(200).json({
                message: "update successfully."
            })
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        });


})

router.delete('/:booksid', (req, res, next) => {

    const id = req.params.booksid;

    /// remove from database

    Books.remove({ _id: id })
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "delete successfully."
            })
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        });

})


module.exports = router;