import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//set env for development
app.get('env')

//Application routes
app.use('/api/v1/users/', UserRoutes.router)

//Testing
// app.get('/', (req, res) => {
//   throw new ApiError(400, 'Ore baba')
// })
// app.get('/', (req:Request, res:Response, next: NextFunction) => {
//   throw new Error("Instance error");

// throw new ApiError(405, 'Ore baba')
// next('Ore baba next error') //error
// });

//global error handler called
app.use(globalErrorHandler)

export default app
