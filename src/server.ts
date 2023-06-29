import app from './app'
import mongoose from 'mongoose'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'
import { Server } from 'http'

let server: Server
//handling uncaught Exception, it runs as synchronous behaviour, like if x is not defined as variable then it will throw a uncaughtExcention error and process.exit(1) will stop the server
process.on('uncaughtException', err => {
  errorLogger.error('uncaughtException is detected: ', err)
  process.exit(1)
})

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
    logger.info('DB Connected')
  } catch (error) {
    errorLogger.error('Failed to connect db: ', error)
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  //unhandledRejection error handling
  process.on('unhandledRejection', err => {
    errorLogger.error(
      'unhandledRejection is detected, we are closing our server:',
      err
    )
    if (server) {
      server.close(() => {
        errorLogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

//sigterm
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
