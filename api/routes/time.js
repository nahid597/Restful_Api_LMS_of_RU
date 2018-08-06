const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const TimeSchedule = require('../models/time');

router.get('/', (req, res, next) => {

    TimeSchedule.find()
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


router.get('/:timeid', (req, res, next) => {

    const id = req.params.timeid;

    const query = {
        key: id
    }

    TimeSchedule.find(query)
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    message: doc
                })
            } else {
                res.status(200).json({
                    message: "data is not exists for this key"
                })
            }

        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        });

})

router.post('/', (req, res, next) => {

    const time = new TimeSchedule({
        _id: new mongoose.Types.ObjectId(),
        key: req.body.key,
        values: req.body.values
    });

    time.save()
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

    TimeSchedule.findByIdAndUpdate({ _id: id }, req.body)
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

    TimeSchedule.remove({ _id: id })
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