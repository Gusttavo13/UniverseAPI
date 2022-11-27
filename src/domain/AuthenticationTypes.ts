export const AuthenticationTypes: {
  EMAIL: "EMAIL"
  GITHUB: "GITHUB"
  GOOGLE: "GOOGLE"
  LINKEDIN: "LINKEDIN"
  INSTAGRAM: "INSTAGRAM"
  FACEBOOK: "FACEBOOK"
} = {
  EMAIL: "EMAIL",
  GITHUB: "GITHUB",
  GOOGLE: "GOOGLE",
  LINKEDIN: "LINKEDIN",
  INSTAGRAM: "INSTAGRAM",
  FACEBOOK: "FACEBOOK",
}

export type AuthenticationTypes = typeof AuthenticationTypes[keyof typeof AuthenticationTypes]