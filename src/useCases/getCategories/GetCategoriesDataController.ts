import { Request, Response } from 'express'
import { GetCategoriesDataUseCase } from './GetCategoriesDataUseCase'

class GetCategoriesDataController {

  async getCategoryByCode(req: Request, res: Response) {

    const { code } = req.params

    const getCategoriesDataUseCase = new GetCategoriesDataUseCase

    const categoriesData = await getCategoriesDataUseCase.executeGetProductsByCategory(code)

    res.json(categoriesData)
  }

  async getAllCategories(req: Request, res: Response) {

    const getCategoriesDataUseCase = new GetCategoriesDataUseCase

    const categoriesData = await getCategoriesDataUseCase.executeGetAllCategories()

    res.json(categoriesData)
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

export { GetCategoriesDataController } 