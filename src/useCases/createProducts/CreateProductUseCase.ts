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

    let tagsID = []
    if(tags){
      const tag = tags.split(',')
      
      await Promise.all(tag.map(async (tag) => {
        const tagExist = await client.tags.findFirst({
          where: {
            tag
          }
        })
        if(!tagExist){
          const tagCreate = await client.tags.create({data: {
            tag
          }})         
          tagsID.push({id: tagCreate.id})
        }else{
          tagsID.push({id: tagExist.id})
        }        
      }))
      console.log(tagsID)
    }
    const productCreate = await client.products.create({data: {
      name,
      description,
      tags: {
        connect: tagsID
      },
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