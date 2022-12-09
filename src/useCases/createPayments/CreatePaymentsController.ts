import { Request, Response } from 'express'
import { CreatePaymentsUseCase } from "./CreatePaymentsUseCase"




class CreatePaymentsController {

  async handle(req: Request, res: Response, authAPI: any) {

    this.paymentPix(req, res, authAPI)
  }

  async paymentPix(req: Request, res: Response, authAPI: any) {

    const { H56Mru68273NBEx5AjR3pT, M25tZBeM8G8gCuHFBx4KcN, Y3zu23uTwGDq3zHh4W5QqU } = req.body

    if (H56Mru68273NBEx5AjR3pT && M25tZBeM8G8gCuHFBx4KcN && Y3zu23uTwGDq3zHh4W5QqU == 'ca1c9d23-684b-45e3-a659-94ba4a7d5e64' && authAPI != null) {

      const reqGN = await authAPI;
      const createPaymentsUseCase = new CreatePaymentsUseCase().pix(reqGN, H56Mru68273NBEx5AjR3pT, M25tZBeM8G8gCuHFBx4KcN)

      res.json(createPaymentsUseCase)
      

    } else {
      res.sendStatus(400);
    }

  }

  async paymentCard(req: Request, res: Response, authAPI: any) {

    const { H56Mru68273NBEx5AjR3pT, M25tZBeM8G8gCuHFBx4KcN, Y3zu23uTwGDq3zHh4W5QqU } = req.body

    if (H56Mru68273NBEx5AjR3pT && M25tZBeM8G8gCuHFBx4KcN && Y3zu23uTwGDq3zHh4W5QqU == 'ca1c9d23-684b-45e3-a659-94ba4a7d5e64' && authAPI != null) {

      const reqGN = await authAPI;
      const createPaymentsUseCase = new CreatePaymentsUseCase().card(reqGN, H56Mru68273NBEx5AjR3pT, M25tZBeM8G8gCuHFBx4KcN)

      res.json(createPaymentsUseCase)
      

    } else {
      res.sendStatus(400);
    }

  }

}

export { CreatePaymentsController }