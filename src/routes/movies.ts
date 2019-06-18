import { Router } from 'express'
import Movie from '../models/movie'
import Rental from '../models/rental'
import Stock from '../models/stock'

export const movies = Router()

movies.post('/', async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(201).json(movie)
  } catch (e) {
    next(e)
  }
})

movies.get('', async (req, res, next) => {
  try {
    res.json(await Movie.findAll())
  } catch (e) {
    next(e)
  }
})

movies.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.scope(req.query['scope']).findByPk(
      req.params['id']
    )
    res.json(movie)
  } catch (e) {
    next(e)
  }
})

movies.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.scope(req.query['scope']).findByPk(
      req.params['id']
    )
    res.json(movie)
  } catch (e) {
    next(e)
  }
})

movies.get('/rents/:id', async (req, res, next) => {
  try {
    const rents = await Rental.findAll({
      include: [
        {
          model: Stock,
          include: [
            {
              model: Movie
            }
          ]
        }
      ],
      where: { account: req.params.id }
    })

    res.json(rents)
  } catch (e) {
    next(e)
  }
})

movies.put('/:id', async (req, res, next) => {
  try {
    await Movie.update<Movie>(req.body, { where: { id: req.params['id'] } })
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})
