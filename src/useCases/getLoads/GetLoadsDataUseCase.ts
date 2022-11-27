import { client } from "../../services/prisma"
import { GetUserDataUseCase } from "../getUserData/GetUserDataUseCase";
//token, filterLoad, filterPrice, filterStatus, filterTime, page, maxPerPage
type RequestLoads = {
  token: string;
  filterPrice?: 'asc' | 'desc';
  filterStatus?: 'asc' | 'desc';
  filterTime?: 'asc' | 'desc';
  page: number;
  maxPerPage?: number;
}

class GetLoadsDataUseCase {

  async execute({ token, filterPrice, filterStatus, filterTime, page, maxPerPage }: RequestLoads) {

    const getUserDataUseCase = new GetUserDataUseCase
    const loadsData = await getUserDataUseCase.getUserAllLoadsFilters({ token, filterPrice, filterStatus, filterTime, page, maxPerPage })

    return loadsData
  }

}

export { GetLoadsDataUseCase } 