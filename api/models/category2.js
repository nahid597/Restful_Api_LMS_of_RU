const mongoose = require('mongoose');

const category2schema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    key1: String,
    key2: String,
    values: String

})

module.exports = mongoose.model("Category2Schedule", category2schema);