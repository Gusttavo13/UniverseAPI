import { client } from "../../services/prisma"

class GetProductsDataUseCase {

  async executeGetProductsTopPage() {

    const products = await client.productsShowcase.findMany({
      where: {tag : 'topHome' },
      take: 4,
    })
    if(products.length < 1){
      throw new Error("Erros nos produtos da homepage.")
    }
    return products


  }

  async executeGetProductByCode( code : string) {
    if(code){
      const products = client.products.findFirst({
        where: {
          code
        }
      })
      if(!products){
        throw new Error("Produto não encontrado.")
      }
      return products
    }else{
      const products = await client.products.findMany()
  
      return products
    }
    

  }

}

export { GetProductsDataUseCase } 