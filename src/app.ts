import express, { Application } from 'express'
import cors from 'cors'
import usersService from './app/modules/users/users.service'

const app: Application = express()
app.set('debug', true)
app.use(cors)

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  await usersService.createUser({
    id: '999',
    password: 'sakib12345',
    role: 'student',
  })
  res.send('Hello World!')
})

export default app
