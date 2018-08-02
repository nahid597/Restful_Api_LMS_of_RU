const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const booksrouter = require('./api/routes/books');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use((req, res, next) => {

    res.header("Access-Control-Allowz-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-type,Accept,Authorization");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Method", "PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }

    next();

})

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