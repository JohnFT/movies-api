import { Router } from 'express'
import Stock from '../models/stock'

export const stock = Router()

stock.post('/', async (req, res, next) => {
  try {
    const stoc = await Stock.create(req.body)
    res.status(201).json(stoc)
  } catch (e) {
    next(e)
  }
})

stock.get('', async (req, res, next) => {
  try {
    res.json(await Stock.findAll())
  } catch (e) {
    next(e)
  }
})

stock.get('/:id', async (req, res, next) => {
  try {
    const stoc = await Stock.scope(req.query['scope']).findByPk(
      req.params['id']
    )
    res.json(stoc)
  } catch (e) {
    next(e)
  }
})

stock.get('/count/movies/:id', async (req, res, next) => {
  try {
    const stoc = await Stock.count({
      where: { movieId: req.params.id, state: 1 }
    })
    res.json(stoc)
  } catch (e) {
    next(e)
  }
})

stock.put('/:id', async (req, res, next) => {
  try {
    await Stock.update<Stock>(req.body, { where: { id: req.params['id'] } })
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})
