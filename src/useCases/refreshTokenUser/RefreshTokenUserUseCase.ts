import dayjs from "dayjs"
import { GenerateRefreshToken } from "../../Providers/Token/GenerateRefreshToken"
import { GenerateTokenProvider } from "../../Providers/Token/GenerateTokenProvider"
import { client } from '../../services/prisma'

class RefreshTokenUserUseCase {

  async execute(refresh_Token: string){

    const refreshToken = await client.refreshToken.findFirst({ 
      where: { id: refresh_Token }
    })

    if(!refreshToken){
      throw new Error("Invalid refresh token.")
    }

    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn))

    if(refreshTokenExpired) {
      throw new Error("Expired refresh token.")
    }

    const generateRefreshTokenProvider = new GenerateRefreshToken()

    const token = await generateRefreshTokenProvider.execute(refreshToken.userId)

    return {token}
  }

}

export {RefreshTokenUserUseCase}
