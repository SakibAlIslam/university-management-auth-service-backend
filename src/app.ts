import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//set env for development
app.get('env')

//Application routes
app.use('/api/v1/users/', usersRouter)

app.get('/', async (req, res) => {
  res.send('Hello0 World!')
})

export default app
