const mongoose = require('mongoose');

const bookschema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    key: { type: String, required: true },
    values: String
    

    // Total_Number_of_books: String,
    // Number_of_avaiable_books: String,
    // How_many_number_of_books_you_are_borred: String,
    // Which_books_are_avaiable: String
});

module.exports = mongoose.model("Books", bookschema);
