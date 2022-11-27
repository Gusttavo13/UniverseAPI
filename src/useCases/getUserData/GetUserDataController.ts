import { Request, Response } from 'express'
import { GetUserDataUseCase } from './GetUserDataUseCase'


class GetUserDataController {

  async handle(req: Request, res: Response){

    const [, token] = req.headers.authorization.split(" ")

    const getUserDataUseCase = new GetUserDataUseCase()

    const userData = await getUserDataUseCase.getUserDataFromToken(token)

    res.json(userData)

  }

}

export {GetUserDataController}