import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as errorhandler from 'strong-error-handler'
import { movies } from './routes/movies'


import { stock } from './routes/stock'
import { account } from './routes/account'
import { rental } from './routes/rental'

export const app = express()

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }))

// enable corse for all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Expose-Headers', 'x-total-count')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH')
  res.header('Access-Control-Allow-Headers', 'Content-Type,authorization')

  next()
})

app.use('/api/v1/movie', movies)
app.use('/api/v1/account', account)
app.use('/api/v1/rental', rental)
app.use('/api/v1/stock', stock)

app.use(
  errorhandler({
    debug: process.env.ENV !== 'prod',
    log: true
  })
)
