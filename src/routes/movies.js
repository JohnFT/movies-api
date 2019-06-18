"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movie_1 = require("../models/movie");
const rental_1 = require("../models/rental");
const stock_1 = require("../models/stock");
exports.movies = express_1.Router();
exports.movies.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const movie = yield movie_1.default.create(req.body);
        res.status(201).json(movie);
    }
    catch (e) {
        next(e);
    }
}));
exports.movies.get('', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.json(yield movie_1.default.findAll());
    }
    catch (e) {
        next(e);
    }
}));
exports.movies.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const movie = yield movie_1.default.scope(req.query['scope']).findByPk(req.params['id']);
        res.json(movie);
    }
    catch (e) {
        next(e);
    }
}));
exports.movies.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const movie = yield movie_1.default.scope(req.query['scope']).findByPk(req.params['id']);
        res.json(movie);
    }
    catch (e) {
        next(e);
    }
}));
exports.movies.get('/rents/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const rents = yield rental_1.default.findAll({
            include: [
                {
                    model: stock_1.default,
                    include: [
                        {
                            model: movie_1.default
                        }
                    ]
                }
            ],
            where: { account: req.params.id }
        });
        res.json(rents);
    }
    catch (e) {
        next(e);
    }
}));
exports.movies.put('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield movie_1.default.update(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=movies.js.map