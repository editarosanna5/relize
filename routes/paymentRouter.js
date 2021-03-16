const express = require('express');
const bodyParser = require('body-parser');

paymentRouter.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST method not supported');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT method not supported');
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE method not supported');
});

paymentRouter.route('/complete')
.get((req, res, next) => {
    res.statusCode = 200;
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST method not supported');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT method not supported');
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE method not supported');
});

module.exports = paymentRouter;