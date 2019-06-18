"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var sequelize_1 = require("sequelize");
exports.default = new sequelize_typescript_1.Sequelize({
    username: 'ybdzsxgzqfvmez',
    password: '7ddf76784245a867b71a5edb1098e9bd1c9c40db7f2d5a620394601e0c28f7cd',
    database: 'd75upncbpkkgn3',
    dialect: 'postgres',
    host: 'ec2-54-83-9-36.compute-1.amazonaws.com',
    dialectOptions: {
        ssl: true
    },
    operatorsAliases: sequelize_1.Op,
    storage: ':memory:',
    modelPaths: [__dirname + '/models']
});
//# sourceMappingURL=sequelize.js.map