import { client } from "../../services/prisma"

class GetCategoriesDataUseCase {

  async executeGetProductsByCategory( code : string) {
    if(code){
      const category = await client.tags.findFirst({
        where: {
          code
        }
      })
      if(!category){
        throw new Error("Categoria não encontrada.")
      }
      return {name: category.tag, description: category.description}
    }else{
      throw new Error("Categoria não encontrado.")
    }
  }

  async executeGetAllCategories() {
      const category = await client.tags.findMany({})
      if(!category){
        throw new Error("Sem categorias disponíveis.")
      }
      return category
  }
}

export { GetCategoriesDataUseCase } 