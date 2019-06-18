import { Sequelize } from 'sequelize-typescript'

import { Op } from 'sequelize'
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
export default new Sequelize({
  username: 'kcxoatqmrxqmht',
  password: '9e93ae19bd35550a1716d1da23a266c3f6096079b1b6456a65cfb2be5e469f68',
  database: 'd1cm1n45ngf9hb',
  dialect: 'postgres',
  host: 'ec2-174-129-208-118.compute-1.amazonaws.com',
  dialectOptions: {
    ssl: true
  },
  operatorsAliases: Op,
  storage: ':memory:',
  modelPaths: [__dirname + '/models']
})

// sequelize.addModels([Movie])
