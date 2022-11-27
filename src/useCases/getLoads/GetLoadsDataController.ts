import { Request, Response } from 'express'
import { GetLoadsDataUseCase } from './GetLoadsDataUseCase'


class GetLoadsDataController {

  async handle(req: Request, res: Response){
    const {filterPrice, filterStatus, filterTime, page, maxPerPage }:any = req.query
    const [, token] = req.headers.authorization.split(" ")
    if(!token) throw new Error("Necessário token do usuário.")
    if(!page) throw new Error("Necessário página atual.")
    if(page || maxPerPage){
      if(isNaN(page) && page != undefined) throw new Error("O campo page deve ser um número.")
      if(isNaN(maxPerPage) && maxPerPage != undefined) throw new Error("O campo maxPerPage deve ser um número.")
      if(page <= 0) throw new Error("O campo Page deve ser maior que 0.")
      if(maxPerPage < 1) throw new Error("O campo maxPerPage deve ser maior que 1.")
    }
    if(filterPrice || filterStatus || filterTime){
    
      if(!(filterPrice == "asc" || filterPrice == "desc") && filterPrice != undefined) throw new Error("O filtro price deve ser asc ou desc.")
      if(!(filterStatus == "asc" || filterStatus == "desc") && filterStatus != undefined) throw new Error("O filtro status deve ser asc ou desc.")
      if(!(filterTime == "asc" || filterTime == "desc") && filterTime != undefined) throw new Error("O filtro time deve ser asc ou desc.")
    }

    const getLoadsDataUseCase = new GetLoadsDataUseCase

    const loadData = await getLoadsDataUseCase.execute({token, filterPrice, filterStatus, filterTime, page, maxPerPage})
    res.json(loadData)

  }

}

export { GetLoadsDataController }