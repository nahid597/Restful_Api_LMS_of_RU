const mongoose = require('mongoose');

const arrivalschema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    new_arrival_books: String
});

module.exports = mongoose.model('ArrivalSchema', arrivalschema);