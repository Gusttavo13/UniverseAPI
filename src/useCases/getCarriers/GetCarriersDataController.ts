import { Request, Response } from 'express'
import { GetCarriersDataUseCase } from './GetCarriersDataUseCase'


class GetCarriersDataController {

  async handle(req: Request, res: Response){

    const { id } = req.body

    const getCarriersDataUseCase = new GetCarriersDataUseCase

    const carrierData = await getCarriersDataUseCase.execute(id)

    res.json(carrierData)

  }

}

export { GetCarriersDataController }