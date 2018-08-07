const mongoose = require('mongoose');

const deptlistschema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    key: String,
    values: String

})

module.exports = mongoose.model("DeptlistSchedule", deptlistschema);