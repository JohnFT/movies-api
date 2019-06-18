import { Router } from 'express'
import Rental from '../models/rental'
import Stock from '../models/stock'

export const rental = Router()

rental.post('/', async (req, res, next) => {
  try {
    const stock = await Stock.findOne({
      where: { movieId: req.body.movie, state: 1 }
    })

    if (!stock) {
      res.status(200).json({ message: 'No hay Stock', error: true })
      return
    }

    stock.state = 2

    console.log(stock)

    await Stock.update<Stock>(
      { state: 2 },
      {
        where: { id: stock.id }
      }
    )

    const rental = { ...req.body, stockId: stock.id, state: 1 }

    const rent = await Rental.create(rental)
    res.status(201).json(rent)
  } catch (e) {
    next(e)
  }
})

rental.get('', async (req, res, next) => {
  try {
    res.json(await Rental.findAll())
  } catch (e) {
    next(e)
  }
})

rental.get('/:id', async (req, res, next) => {
  try {
    const rent = await Rental.scope(req.query['scope']).findByPk(
      req.params['id']
    )
    res.json(rent)
  } catch (e) {
    next(e)
  }
})

rental.put('', async (req, res, next) => {
  try {
    const rental = await Rental.update<Rental>(req.body, {
      where: { id: req.body.id }
    })[1]

    res.json(rental)
  } catch (e) {
    next(e)
  }
})
