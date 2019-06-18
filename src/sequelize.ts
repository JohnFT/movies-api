import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import { Movie } from "./models/Movie";

export const sequelize = new Sequelize({
  dialect: "postgres",
  username: "kcxoatqmrxqmht",
  password: "9e93ae19bd35550a1716d1da23a266c3f6096079b1b6456a65cfb2be5e469f68",
  dialectOptions: {
    ssl: true
  },
  operatorsAliases: Op,
  database: "d1cm1n45ngf9hb",
  host: "ec2-174-129-208-118.compute-1.amazonaws.com",
  models: [__dirname + "/src/models"]
});

sequelize.addModels([Movie]);
