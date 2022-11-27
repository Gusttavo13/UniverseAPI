import { client } from "../../services/prisma"

type RequestLoads = {
  token: string;
  filterPrice?: 'asc' | 'desc';
  filterStatus?: 'asc' | 'desc';
  filterTime?: 'asc' | 'desc';
  page: number;
  maxPerPage?: number;
}

class GetUserDataUseCase {


  async getUserAllDataFromToken(token: string) {
    const userToken = await client.refreshToken.findFirst({
      where: { id: token }
    })

    if (!userToken) {
      throw new Error("Error data")
    }
    const userData = await client.user.findFirst({
      where: { id: userToken.userId }
    })

    return userData

  }

  async getUserDataFromCPF(cpf: string) {
    const userData = await client.user.findFirst({
      where: { cpf }
    })

    return userData

  }

  async getUserDataFromEmail(email: string) {
    const userData = await client.user.findFirst({
      where: { email }
    })

    return userData

  }

  async getUserDataFromToken(token: string) {
    const userToken = await client.refreshToken.findFirst({
      where: { id: token }
    })

    if (!userToken) {
      throw new Error("Error data")
    }
    const userData = await client.user.findFirst({
      where: { id: userToken.userId }
    })

    const userCompany = await client.enterprise.findFirst({
      include: {
        employees: {
          where: {
            id: userToken.id
          }
        }
      }
    })

    return { email: userData.email, name: userData.name, role: userData.role, verify: userData.is_verify_email, company: userCompany.name }

  }

  async getUserAllLoads(token: string) {
    const userToken = await client.refreshToken.findFirst({
      where: { id: token }
    })

    if (!userToken) {
      throw new Error("Error data")
    }
    const userExists = await client.user.findFirst({
      where: { id: userToken.userId }
    })

    if (!userExists) {
      throw new Error("Usuário não existe.")
    }
    const loadsData = await client.loads.findMany({
      where: {
        enterprise: {
          id: userExists.enterprise_id
        }
      }
    })

    return loadsData

  }
  async getUserAllLoadsFilters({ token, filterPrice, filterStatus, filterTime, page, maxPerPage }: RequestLoads) {

    let maxPerPageVar = (!maxPerPage) ? 4 : maxPerPage
    let skipItems = (page == 1) ? 0 : (page - 1) * maxPerPageVar
    
    const userExists = await this.getUserAllDataFromToken(token)

    if (!userExists) {
      throw new Error("Usuário não existe.")
    }

    let orderBy = []
    if(filterPrice && !filterStatus && !filterTime) orderBy.push({price: filterPrice})
    if(!filterPrice && filterStatus && !filterTime) orderBy.push({status: filterStatus})
    if(!filterPrice && !filterStatus && filterTime) orderBy.push({updateAt: filterTime})
    

    const loadsData = await client.loads.findMany({
      skip: skipItems,
      take: maxPerPageVar,
      orderBy,
      where: {
        enterprise: {
          id: userExists.enterprise_id
        }
      }
    })

    const loadsDataSize = (await this.getUserAllLoads(token)).length

    return [{ totalItems: loadsDataSize, perPage: maxPerPageVar, totalPage: Math.ceil(loadsDataSize / maxPerPageVar) }, {items: [...loadsData]}]

  }


}

export { GetUserDataUseCase }