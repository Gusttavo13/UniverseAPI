import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express'
import { router } from './router'
import cors from 'cors'
const app = express()

//app.use(cors({
//  origin: 'https://lojadoatirador.com'
//}))

app.use(express.json())

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  
  response.status(403);
  return response.json({
    status: "Error",    
    message: error.message,
  })

})

app.get('*', function(req, res){
  res.send('<h1>Você não permissão para acessar essa área.</h1>');
});

app.listen(2222, () => console.log('Servidor rodando na porta 2222 - http://localhost:2222'))