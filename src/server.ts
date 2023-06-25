import app from './app'
import mongoose from 'mongoose'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
    logger.info('DB Connected')
  } catch (error) {
    errorLogger.error('Failed to connect db: ', error)
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootstrap()
