const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const booksrouter = require('./api/routes/books');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use('/books', booksrouter);

app.use((req, res, next) => {

    const error = new Error('Not Found !!');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({

        eroor: {
            message: error.message
        }
    })
})

module.exports = app;