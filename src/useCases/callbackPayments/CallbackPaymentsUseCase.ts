import { client } from "../../services/prisma"

type IRouteRequest = {

}

class CallbackPaymentsUseCase {

  async execute( {} : IRouteRequest) {


    return {pagamento: "paid"}
  }

}

export { CallbackPaymentsUseCase } 