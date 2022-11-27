import dayjs from 'dayjs'
import { sign } from 'jsonwebtoken'
import { client } from '../../services/prisma'



class GenerateRefreshToken {

  async execute(userId: string){

    const expiresIn = dayjs().add(1800, 'second').unix()
    const id = sign({}, process.env.SECRET_TOKEN_KEY, {
      subject: userId,
      expiresIn: "1800s",
    })

    const tokenAlreadyExists = await client.refreshToken.findFirst({
      where: {
        userId
      }
    })
    if(tokenAlreadyExists){
      const deleteRefreshToken = await client.refreshToken.delete({
        where: {
          userId
        }
      })
    }
    const generateRefreshToken = await client.refreshToken.create({
      data: {
        id, 
        userId, 
        expiresIn, 
      },
    })

    return generateRefreshToken
  }

}

export { GenerateRefreshToken }