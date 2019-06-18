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
const account_1 = require("../models/account");
exports.account = express_1.Router();
exports.account.post('/login', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const acco = yield account_1.default.findOne({
            where: { username: req.body.user, password: req.body.pass }
        });
        res.status(201).json(acco);
    }
    catch (e) {
        next(e);
    }
}));
exports.account.post('/logout', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.status(201).json(true);
    }
    catch (e) {
        next(e);
    }
}));
exports.account.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const acco = yield account_1.default.create(req.body);
        res.status(201).json(acco);
    }
    catch (e) {
        next(e);
    }
}));
exports.account.get('', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        res.json(yield account_1.default.findAll());
    }
    catch (e) {
        next(e);
    }
}));
exports.account.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const acco = yield account_1.default.scope(req.query['scope']).findByPk(req.params['id']);
        res.json(acco);
    }
    catch (e) {
        next(e);
    }
}));
exports.account.put('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield account_1.default.update(req.body, {
            where: { id: req.params['id'] }
        });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=account.js.map