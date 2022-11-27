import { Role } from '@prisma/client'

const StaffRoles = [Role.DIRECTOR, Role.ADMINISTRATOR, Role.PROGRAMMER]

const PermissionRoute = {

  "/universe/v1/admin/carrier": [...StaffRoles],
  "/universe/v1/admin/routes": [...StaffRoles],
  "/universe/v1/admin/loads": [...StaffRoles],

}


export default {PermissionRoute}