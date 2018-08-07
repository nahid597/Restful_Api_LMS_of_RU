const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const ArrivalSchema = require('../models/new_arrival');

router.get('/', (req, res, next) => {

    ArrivalSchema.find()
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

});


// router.get('/:timeid', (req, res, next) => {

//     const id = req.params.timeid;

//     const query = {
//         key: id
//     }

//     TimeSchedule.find(query)
//         .exec()
//         .then(doc => {
//             if (doc) {
//                 res.status(200).json({
//                     message: doc
//                 })
// } else {
//     res.status(200).json({
//                     message: "data is not exists for this key"
//                 })
//             }

//         })
//         .catch(err => {
//             res.status(404).json({
//                 error: err
//             })
//         });

// })

router.post('/', (req, res, next) => {

    const arrival = new ArrivalSchema({
        _id: new mongoose.Types.ObjectId(),
        new_arrival_books: req.body.new_arrival_books,

    });

    arrival.save()
        .then(doc => {
            res.status(200).json({
                message: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
});

router.patch('/:timeid', (req, res, next) => {

    const id = req.params.timeid;

    ArrivalSchema.findByIdAndUpdate({
            _id: id
        }, req.body)
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


});

router.delete('/:timeid', (req, res, next) => {

    const id = req.params.timeid;

    /// remove from database

    ArrivalSchema.remove({
            _id: id
        })
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
        })
});



module.exports = router;