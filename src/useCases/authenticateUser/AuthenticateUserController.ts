import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

class AuthenticateUserController {

  async handle(req: Request, res: Response){

    const { cpf, email, password } = req.body

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    if(cpf){
      const token = await authenticateUserUseCase.authCPF({cpf, password});
      return res.json(token)
    }
    if(email){
      const token = await authenticateUserUseCase.authEmail({email, password});
      return res.json(token)
    }
  
  }

}

export {AuthenticateUserController}