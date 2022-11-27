import { client } from "../../services/prisma"

type IRouteRequest = {
  name: string
  description: string
  tags: string
  colors: string
  sizes: string
  models: string
  brand: string
  price: number
  showcase: string
}

class CreateProductUseCase {

  async execute( {name, description, tags, colors, sizes, models, brand, price, showcase} : IRouteRequest) {

    const tagExists = await client.tags.findFirst({
      where: {
        tag: tags
      }
    })

    if(!tagExists){
      const tagCreate = await client.tags.create({
        data: {
          code: 23923928,
          tag: tags,
        }
      })

      const productCreate = await client.products.create({data: {
        name,
        description,
        tags: tagCreate.tag,
        colors,
        sizes,
        models,
        brand,
        price,
        showcase,
      }})

      return {productCreate}
    }

    return {status: 'Criado Tag'}
  
  }

}

export { CreateProductUseCase } 