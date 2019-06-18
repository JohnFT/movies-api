"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var bodyParser = __importStar(require("body-parser"));
var errorhandler = __importStar(require("strong-error-handler"));
var movies_1 = require("./routes/movies");
var stock_1 = require("./routes/stock");
var account_1 = require("./routes/account");
var rental_1 = require("./routes/rental");
exports.app = express();
exports.app.use(bodyParser.urlencoded({ extended: true }));
exports.app.use(bodyParser.json({ limit: '5mb' }));
exports.app.use(function (req, res, next) {
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