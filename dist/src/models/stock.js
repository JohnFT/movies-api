"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const movie_1 = require("./movie");
const rental_1 = require("./rental");
let Stock = class Stock extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Stock.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => movie_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Stock.prototype, "movieId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => movie_1.default),
    __metadata("design:type", movie_1.default)
], Stock.prototype, "movie", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Stock.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => rental_1.default, 'stockId'),
    __metadata("design:type", rental_1.default)
], Stock.prototype, "rental", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Stock.prototype, "state", void 0);
Stock = __decorate([
    sequelize_typescript_1.Table
], Stock);
exports.default = Stock;
//# sourceMappingURL=stock.js.map