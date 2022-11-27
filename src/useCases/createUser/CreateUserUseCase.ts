import { client } from "../../services/prisma"
import { AuthenticationTypes as PrismaAuthenticationTypes } from "../../domain/AuthenticationTypes"
import { Role as PrismaRole } from "../../domain/Role"
import { hash } from "bcryptjs"

interface IUserRequest {
  name: string
  email: string
  password: string
  role?: PrismaRole
  authenticationTypes: PrismaAuthenticationTypes
}

class CreateUserUseCase {

  async execute({ name, email, password, authenticationTypes }: IUserRequest) {

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if (!validateEmail(email)) {
      throw new Error("Informe um email válido.")
    }

    const userAlreadyExists = await client.user.findFirst({
      where: {
        OR: [
          {
            email
          },
        ]
      }
    })
    if (userAlreadyExists) {
      throw new Error("Endereço de email indisponível.")
    }


    const passwordHash = await hash(password, 8)

    let loginProvider;

    if (authenticationTypes === "GOOGLE") { loginProvider = PrismaAuthenticationTypes.GOOGLE }
    else if (authenticationTypes === "FACEBOOK") { loginProvider = PrismaAuthenticationTypes.FACEBOOK }
    else { loginProvider = PrismaAuthenticationTypes.EMAIL }



    const user = await client.user.create({
      data: { name, email, password: passwordHash, authenticationTypes: loginProvider }
    })

    const hashEmail = (email) => {
      const emailSplit = email.split("@")
      let emailHash = ""
      for (let i = 0; i < 4; i++) {
        emailHash += emailSplit[0][i]
      }
      for (let i = 0; i < emailSplit[0].length - 4; i++) {
        emailHash += "*"
      }
      emailHash += "@" + emailSplit[1]
      return emailHash
    }

    return { email: hashEmail(user.email) }

  }

}

export { CreateUserUseCase } 