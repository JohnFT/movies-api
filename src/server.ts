import { createServer } from 'http'
import { app } from './app'
import Sequelize  from './sequelize'

const port = process.env.PORT || 3000

;(async () => {
  await Sequelize.sync({ force: false })

  createServer(app).listen(port, () =>
    console.info(`Server running on port ${port}`)
  )
})()
