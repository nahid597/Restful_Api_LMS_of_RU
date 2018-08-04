const mongoose = require('mongoose');

const timeschema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    key: String,
    values: String

})

module.exports = mongoose.model("TimeSchedule", timeschema);