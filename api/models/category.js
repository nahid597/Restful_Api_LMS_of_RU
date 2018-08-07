const mongoose = require('mongoose');

const categoryschema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    key: String,
    values: String

})

module.exports = mongoose.model("CategorySchedule", categoryschema);