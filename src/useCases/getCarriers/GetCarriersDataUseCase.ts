import { client } from "../../services/prisma"

class GetCarriersDataUseCase {

  async execute( id : string) {
    if(id){
      const carrier = await client.carriers.findFirst({
        where: {
          id
        }
      })
      if(!carrier){
        throw new Error("Transportadora não encontrada.")
      }
      return carrier
    }else{
      const carriers = await client.carriers.findMany()
  
      return carriers
    }
    

  }

}

export { GetCarriersDataUseCase } 