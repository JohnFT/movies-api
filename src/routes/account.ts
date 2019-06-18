import { Router } from 'express'
import Account from '../models/account'

export const account = Router()

account.post('/login', async (req, res, next) => {
  try {
    
    const acco = await Account.findOne<Account>({
      where: { username: req.body.user, password: req.body.pass }
    })
    res.status(201).json(acco)
  } catch (e) {
    next(e)
  }
})

account.post('/logout', async (req, res, next) => {
  try {
    res.status(201).json(true)
  } catch (e) {
    next(e)
  }
})

account.post('/', async (req, res, next) => {
  try {
    const acco = await Account.create(req.body)
    res.status(201).json(acco)
  } catch (e) {
    next(e)
  }
})

account.get('', async (req, res, next) => {
  try {
    res.json(await Account.findAll())
  } catch (e) {
    next(e)
  }
})

account.get('/:id', async (req, res, next) => {
  try {
    const acco = await Account.scope(req.query['scope']).findByPk(
      req.params['id']
    )
    res.json(acco)
  } catch (e) {
    next(e)
  }
})

account.put('/:id', async (req, res, next) => {
  try {
    await Account.update<Account>(req.body, {
      where: { id: req.params['id'] }
    })
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})
