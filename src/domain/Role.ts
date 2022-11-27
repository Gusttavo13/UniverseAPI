export const Role: {
  DIRECTOR: "Diretor"
  ADMINISTRATOR: "Administrador"
  PROGRAMMER: "Programador"
  CUSTOMER: "Cliente"
} = {
  DIRECTOR: "Diretor",
  ADMINISTRATOR: "Administrador",
  PROGRAMMER: "Programador",
  CUSTOMER: "Cliente"
}

export type Role = typeof Role[keyof typeof Role]