import { Request, Response } from 'express'
import { GetProductsDataUseCase } from './GetProductsDataUseCase'

class GetProductsDataController {

  async getProductsTopPage(req: Request, res: Response) {

    const getProductsDataUseCase = new GetProductsDataUseCase

    const productsData = await getProductsDataUseCase.executeGetProductsTopPage()

    res.json(productsData)
  }

  async getProductByCode(req: Request, res: Response) {

    const { code } = req.params

    const getProductsDataUseCase = new GetProductsDataUseCase

    const productsData = await getProductsDataUseCase.executeGetProductByCode(code)

    res.json(productsData)
  }

  // async getProductsByTag(req: Request, res: Response) {

  //   const { tags } = req.params
  //   let tag = parseInt(tags)
  //   const getProductsDataUseCase = new GetProductsDataUseCase
  //   if(!isNaN(tag)){
  //     const productsData = await getProductsDataUseCase.executeGetProductsByTag(tag)

  //     res.json(productsData)
  //   }else{
  //     throw new Error("Categoria não encontrada.")
  //   }
    
  // }

}

export { GetProductsDataController } 