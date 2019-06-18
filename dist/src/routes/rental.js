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
const rental_1 = require("../models/rental");
const stock_1 = require("../models/stock");
exports.rental = express_1.Router();
exports.rental.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const stock = yield stock_1.default.findOne({
            where: { movieId: req.body.movie, state: 1 }
        });
        if (!stock) {
            res.status(200).json({ message: 'No hay Stock', error: true });
            return;
        }
        stock.state = 2;
        console.log(stock);
        yield stock_1.default.update({ state: 2 }, {
            where: { id: stock.id }
        });
        const rental = Object.assign({}, req.body, { stockId: stock.id, state: 1 });
        const rent = yield rental_1.default.create(rental);
        res.status(201).json(rent);
    }
    catch (e) {
        next(e);
    }
}));
exports.rental.get('', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.json(yield rental_1.default.findAll());
    }
    catch (e) {
        next(e);
    }
}));
exports.rental.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const rent = yield rental_1.default.scope(req.query['scope']).findByPk(req.params['id']);
        res.json(rent);
    }
    catch (e) {
        next(e);
    }
}));
exports.rental.put('', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const rental = yield rental_1.default.update(req.body, {
            where: { id: req.body.id }
        })[1];
        res.json(rental);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=rental.js.map