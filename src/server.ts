import mongoose from "mongoose";
import app from "./app";
import config from './config/index'

async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
        console.log('DB Connected')
    } catch (error) {
        console.log('Failed to connect db: ', error)
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  bootstrap()