import { Router } from "express";

import { CreateUserController } from "./useCases/createUser/CreateUserController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { ensureRoleAuthenticated } from "./middlewares/ensureRoleAuthenticated";
import { GetProductsDataController } from "./useCases/getProducts/GetProductsDataController";
import { CreateProductController } from "./useCases/createProducts/CreateProductController";
/*
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController"

import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController";
import { GetUserDataController } from "./useCases/getUserData/GetUserDataController";
import { GetCarriersDataController } from "./useCases/getCarriers/GetCarriersDataController";
import { CreateRouteController } from "./useCases/createRoutes/CreateRouteController";
import { GetLoadsDataController } from "./useCases/getLoads/GetLoadsDataController";
*/

const router = Router();

const createUserController = new CreateUserController()
const getProductsDataController = new GetProductsDataController()
const createProductController = new CreateProductController()
/*
const createRouteController = new CreateRouteController()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()
const getUserDataController = new GetUserDataController()
const getCarrierDataController = new GetCarriersDataController()
const getLoadsDataController = new GetLoadsDataController()
*/

// users home 
router.post('/universe/v1/register', createUserController.handle)

// products

router.post('/universe/v1/products', createProductController.handle)

router.get('/universe/v1/products', getProductsDataController.getProductByCode)

router.get('/universe/v1/products/homepage', getProductsDataController.getProductsTopPage)

//router.get('/universe/v1/products/:category', getProductsDataController.getProductsByTag)

/*


router.post('/universe/v1/authreload', refreshTokenUserController.handle)

router.post('/universe/v1/login', authenticateUserController.handle)


//admin dashboard
router.post('/universe/v1/admin/carrier', ensureRoleAuthenticated, createCarrierController.handle)

router.get('/universe/v1/admin/carrier', ensureRoleAuthenticated, getCarrierDataController.handle)

router.post('/universe/v1/admin/routes', ensureRoleAuthenticated, createRouteController.handle)

router.get('/universe/v1/admin/routes', ensureRoleAuthenticated, getRouterDataController.handle)

//dashboard users
router.get('/universe/v1/dashboard/loads', ensureRoleAuthenticated, getLoadsDataController.handle)
*/
export { router }