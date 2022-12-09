import { Request, Response } from 'express'
import { CallbackPaymentsUseCase } from "./CallbackPaymentsUseCase"
import axios from 'axios'

class CallbackPaymentsController {

  

  async handle(req: Request, res: Response){

    const { pix } = req.body

    console.log(req.body)
    if(pix){
      const callbackPaymentsUseCase = new CallbackPaymentsUseCase();

      const callback = callbackPaymentsUseCase.execute(pix[0].txid)
      res.json(callback)
    }else{
      res.json({status: "Sem pix"})
    }
  }

}

export { CallbackPaymentsController }