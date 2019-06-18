"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
/*
const properties = {
  dialect: 'postgres',
  username: 'kcxoatqmrxqmht',
  password: '9e93ae19bd35550a1716d1da23a266c3f6096079b1b6456a65cfb2be5e469f68',
  dialectOptions: {
    ssl: true
  },
  operatorsAliases: Op,
  database: 'd1cm1n45ngf9hb',
  host: 'ec2-174-129-208-118.compute-1.amazonaws.com',
  models: [__dirname + '/src/models']
} */
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
// sequelize.addModels([Movie])
//# sourceMappingURL=sequelize.js.map