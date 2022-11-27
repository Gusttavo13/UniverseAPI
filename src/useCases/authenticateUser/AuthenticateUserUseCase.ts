import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { GenerateRefreshToken } from '../../Providers/Token/GenerateRefreshToken'
import { GenerateTokenProvider } from '../../Providers/Token/GenerateTokenProvider'
import { client } from "../../services/prisma"

interface IUserAuthRequest {

  cpf?: string
  email?: string
  password: string

}


class AuthenticateUserUseCase {

  async authCPF({cpf, password}: IUserAuthRequest){

    const userAlreadyExists = await client.user.findFirst({ 
      where: { cpf }
    })

    if(!userAlreadyExists){
      throw new Error("CPF/CNPJ ou senha incorretos!")
    }

    const passwordMatch = await compare(password, userAlreadyExists.password)

    if(!passwordMatch){
      throw new Error("CPF/CNPJ ou senha incorretos!")
    }

    const generateTokenProvider = new GenerateTokenProvider()

    const token = await generateTokenProvider.execute(userAlreadyExists.id)

    const generateRefreshToken = new GenerateRefreshToken()
    const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id)

    return {token , refreshToken}

  }
  async authEmail({email, password}: IUserAuthRequest){

    const userAlreadyExists = await client.user.findFirst({ 
      where: { email }
    })

    if(!userAlreadyExists){
      throw new Error("Email ou senha incorretos!")
    }

    const passwordMatch = await compare(password, userAlreadyExists.password)

    if(!passwordMatch){
      throw new Error("Email ou senha incorretos!")
    }

    const generateTokenProvider = new GenerateTokenProvider()

    const token = await generateTokenProvider.execute(userAlreadyExists.id)

    const generateRefreshToken = new GenerateRefreshToken()
    const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id)

    return {token , refreshToken}

  }

}

export { AuthenticateUserUseCase }