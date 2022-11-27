import { Request, Response } from 'express'
import { CreateProductUseCase } from "./CreateProductUseCase"


class CreateProductController {

  async handle(req: Request, res: Response){

    const { name, description, tags, colors, sizes, models, brand, price, showcase} = req.body

    console.log(req.body)
    if(!(name && description && tags && (colors || sizes || models) && brand && price && showcase)){
      throw new Error("Certifique-se que preencheu todos os campos.")
    }
    let realPrice = price.toString().replace(',', '.')
    
    if(isNaN(realPrice)) throw new Error("O campo preço deve ser um número.")

    const createProductUseCase = new CreateProductUseCase();

    realPrice = parseFloat(realPrice)

    const createProductData = await createProductUseCase.execute({name, description, tags, colors, sizes, models, brand, price: realPrice, showcase})
    
    return res.json(createProductData)
  }

}

export { CreateProductController }