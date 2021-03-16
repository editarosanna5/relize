const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://192.168.100.10:3000', 'http://192.168.100.10:5000', 'http://localhost:3000', 'http://localhost:5000', 'http://172.31.56.178:3000', 'http://172.31.56.178:5000', 'http://54.175.51.78:3000', 'http://54.175.51.78:5000', 'http://54.175.51.78:80'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: true };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);