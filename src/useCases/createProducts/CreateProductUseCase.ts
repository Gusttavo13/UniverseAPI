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

    const productCreate = await client.products.create({data: {
      name,
      description,
      tags: tags,
      colors,
      sizes,
      models,
      brand,
      price,
      showcase,
    }})

    return {productCreate}
  }

}

export { CreateProductUseCase } 