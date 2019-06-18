"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var movie_1 = __importDefault(require("./movie"));
var rental_1 = __importDefault(require("./rental"));
var Stock = (function (_super) {
    __extends(Stock, _super);
    function Stock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        sequelize_typescript_1.AutoIncrement,
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Stock.prototype, "id", void 0);
    __decorate([
        sequelize_typescript_1.ForeignKey(function () { return movie_1.default; }),
        sequelize_typescript_1.Column
    ], Stock.prototype, "movieId", void 0);
    __decorate([
        sequelize_typescript_1.BelongsTo(function () { return movie_1.default; })
    ], Stock.prototype, "movie", void 0);
    __decorate([
        sequelize_typescript_1.CreatedAt,
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
    ], Stock.prototype, "date", void 0);
    __decorate([
        sequelize_typescript_1.HasMany(function () { return rental_1.default; }, 'stockId')
    ], Stock.prototype, "rental", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Stock.prototype, "state", void 0);
    Stock = __decorate([
        sequelize_typescript_1.Table
    ], Stock);
    return Stock;
}(sequelize_typescript_1.Model));
exports.default = Stock;
//# sourceMappingURL=stock.js.map