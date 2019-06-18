"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const errorhandler = require("strong-error-handler");
const movies_1 = require("./routes/movies");
const stock_1 = require("./routes/stock");
const account_1 = require("./routes/account");
const rental_1 = require("./routes/rental");
exports.app = express();
// middleware for parsing application/x-www-form-urlencoded
exports.app.use(bodyParser.urlencoded({ extended: true }));
// middleware for json body parsing
exports.app.use(bodyParser.json({ limit: '5mb' }));
// enable corse for all origins
exports.app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'x-total-count');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');
    next();
});
exports.app.use('/api/v1/movie', movies_1.movies);
exports.app.use('/api/v1/account', account_1.account);
exports.app.use('/api/v1/rental', rental_1.rental);
exports.app.use('/api/v1/stock', stock_1.stock);
exports.app.use(errorhandler({
    debug: process.env.ENV !== 'prod',
    log: true
}));
//# sourceMappingURL=app.js.map