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
const stock_1 = require("../models/stock");
exports.stock = express_1.Router();
exports.stock.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const stoc = yield stock_1.default.create(req.body);
        res.status(201).json(stoc);
    }
    catch (e) {
        next(e);
    }
}));
exports.stock.get('', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.json(yield stock_1.default.findAll());
    }
    catch (e) {
        next(e);
    }
}));
exports.stock.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const stoc = yield stock_1.default.scope(req.query['scope']).findByPk(req.params['id']);
        res.json(stoc);
    }
    catch (e) {
        next(e);
    }
}));
exports.stock.get('/count/movies/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const stoc = yield stock_1.default.count({
            where: { movieId: req.params.id, state: 1 }
        });
        res.json(stoc);
    }
    catch (e) {
        next(e);
    }
}));
exports.stock.put('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield stock_1.default.update(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=stock.js.map