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
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        sequelize_typescript_1.PrimaryKey,
        sequelize_typescript_1.AutoIncrement,
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Movie.prototype, "id", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Movie.prototype, "name", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(1000))
    ], Movie.prototype, "description", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Movie.prototype, "gender", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Movie.prototype, "director", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Movie.prototype, "stars", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Movie.prototype, "time", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Movie.prototype, "avatar", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
    ], Movie.prototype, "background", void 0);
    __decorate([
        sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER)
    ], Movie.prototype, "price", void 0);
    __decorate([
        sequelize_typescript_1.HasMany(function () { return stock_1.default; }, 'movieId')
    ], Movie.prototype, "stock", void 0);
    Movie = __decorate([
        sequelize_typescript_1.Table
    ], Movie);
    return Movie;
}(sequelize_typescript_1.Model));
exports.default = Movie;
//# sourceMappingURL=movie.js.map