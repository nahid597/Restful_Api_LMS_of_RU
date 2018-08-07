const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const CategorySchema = require('../models/category');
const Category2Schema = require('../models/category2');
const DeptlistSchedule = require('../models/deptlist');

router.get('/', (req, res, next) => {
    CategorySchema.find()
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

router.post('/:deptlistid', (req, res, next) => {
    const category1 = new DeptlistSchedule({
        _id: new mongoose.Types.ObjectId(),
        key: req.body.key,
        values: req.body.values
    });

    category1.save()
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

router.post('/:category1id/:category2id', (req, res, next) => {
    const category2 = new Category2Schema({
        _id: new mongoose.Types.ObjectId(),
        key1: req.body.key1,
        key2: req.body.key2,
        values: req.body.values
    });

    category2.save()
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

router.get('/:deptid', (req, res, next) => {

    const id = req.params.deptid;

    const query = {
        key: id
    }

    // console.log(query);
    DeptlistSchedule.find(query)
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

router.get('/:deptid1/:deptid2', (req, res, next) => {

    const id1 = req.params.deptid1;
    const id2 = req.params.deptid2;



    const query1 = {
        key1: id1
    }

    const query2 = {
        key2: id2
    }

    console.log(id1);
    console.log(id2);

    //db.inventory.find({$and: [{ price: {$ne: 1.99 }}, {price: {$exists: true}}]})

    Category2Schema.find({ key1: id1, key2: id2 })
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

router.patch('/:categoryid', (req, res, next) => {

    const id = req.params.categoryid;
    //console.log(id)

    CategorySchema.findByIdAndUpdate({
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


})

router.patch('/:category1id/:category1id/:deptid', (req, res, next) => {

    const id = req.params.deptid;
    //console.log(id)

    Category2Schema.findByIdAndUpdate({
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


})

router.delete('/:category1id/:category1id/:deptid', (req, res, next) => {

    const id = req.params.deptid;

    /// remove from database

    Category2Schema.remove({
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
        });

});


router.delete('/:categoryid', (req, res, next) => {

    const id = req.params.categoryid;

    /// remove from database

    CategorySchema.remove({
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
        });

});

router.delete('/:categoryid', (req, res, next) => {

    const id = req.params.timeid;

    /// remove from database

    Category2Schema.remove({
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