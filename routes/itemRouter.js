const express = require('express');
const bodyParser = require('body-parser');

const Items = require('../models/items');

const itemRouter = express.Router();

itemRouter.use(bodyParser.json());

itemRouter.route('/')
.get((req, res, next) => {
    Items.find({})
    .then((items) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(items);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
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

promoRouter.route(':/itemId')
.get((req,res,next) => {
    Items.findById(req.params.itemId)
    .then((item) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(item);
    }, (err) => next(err))
    .catch((err) => next (err));
})
.post((req, res, next) => {
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

module.exports = itemRouter;