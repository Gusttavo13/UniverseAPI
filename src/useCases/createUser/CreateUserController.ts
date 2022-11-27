import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'



class CreateUserController {

  async handle(req: Request, res: Response) {

    const { name, email, password, authenticationTypes } = req.body

    if (!name || !email || !password) {
      throw new Error("Certifique que preencheu todos os campos!")
    }

    if ((authenticationTypes !== "GOOGLE") &&
      (authenticationTypes !== "FACEBOOK") &&
      (authenticationTypes !== undefined)) {
      throw new Error("Estilo de autenticação inválido.")
    }

    const createUserUseCase = new CreateUserUseCase()

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      authenticationTypes,
    })

    return res.json(user)

  }


}

export { CreateUserController }