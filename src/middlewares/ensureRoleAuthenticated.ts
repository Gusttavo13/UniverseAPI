import { Role } from '@prisma/client'
import {NextFunction, Response, Request } from 'express'
import { verify } from 'jsonwebtoken'
import RoutesPermissions from '../domain/RoutesPermissions';
import { GetUserDataUseCase } from '../useCases/getUserData/GetUserDataUseCase'

export async function ensureRoleAuthenticated (req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if(!authToken){
    return res.status(401).json({ message: 'Token is missing'})
  }

  const [, token] = authToken.split(" ")

  try {

    verify(token, process.env.SECRET_TOKEN_KEY)
    
  } catch (error) {

    return res.status(401).json({ message: 'Invalid token'})
  
  }

  const getUserDataUseCase = new GetUserDataUseCase()

  const userData = await getUserDataUseCase.getUserDataFromToken(token)

  if(!RoutesPermissions.PermissionRoute[req.path].includes(userData.role)) return res.status(403).json({message: "Você não tem autorização para executar essa ação."})

  return next()

}
