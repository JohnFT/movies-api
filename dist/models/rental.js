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
var stock_1 = __importDefault(require("./stock"));
var account_1 = __importDefault(require("./account"));
var Rental = (function (_super) {
    __extends(Rental, _super);
    function Rental() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        sequelize_typescript_1.AutoIncrement,
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Rental.prototype, "id", void 0);
    __decorate([
        sequelize_typescript_1.ForeignKey(function () { return stock_1.default; }),
        sequelize_typescript_1.Column
    ], Rental.prototype, "stockId", void 0);
    __decorate([
        sequelize_typescript_1.BelongsTo(function () { return stock_1.default; })
    ], Rental.prototype, "stock", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Rental.prototype, "days", void 0);
    __decorate([
        sequelize_typescript_1.CreatedAt,
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
    ], Rental.prototype, "date", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
    ], Rental.prototype, "initDate", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE)
    ], Rental.prototype, "deliveryDate", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Rental.prototype, "state", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Rental.prototype, "price", void 0);
    __decorate([
        sequelize_typescript_1.ForeignKey(function () { return account_1.default; }),
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Rental.prototype, "account", void 0);
    Rental = __decorate([
        sequelize_typescript_1.Table
    ], Rental);
    return Rental;
}(sequelize_typescript_1.Model));
exports.default = Rental;
//# sourceMappingURL=rental.js.map