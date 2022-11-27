import { Role } from "@prisma/client"
import { client } from "../../services/prisma"

interface ICarrierRequest {
  carrier: Role
}

class CreateCarrierUseCase {

  async execute( {carrier} : ICarrierRequest) {

    const carrierAlreadyExist = await client.carriers.findFirst({
      where: {
        name: carrier
      }
    })
    if(carrierAlreadyExist){
      throw new Error("Transportadora já existe!")
    }

    const carrierCreate = await client.carriers.create({
      data: {name: carrier}
    })

    return carrierCreate
  
  }

}

export { CreateCarrierUseCase } 