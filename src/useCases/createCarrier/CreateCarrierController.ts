import { Request, Response } from 'express'
import { CreateCarrierUseCase } from "./CreateCarrierUseCase"


class CreateCarrierController {

  async handle(req: Request, res: Response){

    const { carrier } = req.body

    const createCarrierUseCase = new CreateCarrierUseCase()

    if(carrier == "" || carrier == null) return res.status(403).json({message: "Nome da transportadora faltando."})

    const carrierData = await createCarrierUseCase.execute({carrier})

    return res.json({ id: carrierData.id, carrier: carrierData.name})
  }

}

export { CreateCarrierController }