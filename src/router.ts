import { request, Router } from "express";
//const GNRequest = require('./services/gerencianet');

import { CreateUserController } from "./useCases/createUser/CreateUserController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { ensureRoleAuthenticated } from "./middlewares/ensureRoleAuthenticated";
import { GetProductsDataController } from "./useCases/getProducts/GetProductsDataController";
import { CreateProductController } from "./useCases/createProducts/CreateProductController";
import { CallbackPaymentsController } from "./useCases/callbackPayments/CallbackPaymentsController";
import { CreatePaymentsController } from "./useCases/createPayments/CreatePaymentsController";
import { GetCategoriesDataController } from "./useCases/getCategories/GetCategoriesDataController";

const router = Router();

const createUserController = new CreateUserController()
const getProductsDataController = new GetProductsDataController()
const createProductController = new CreateProductController()


const getCategoriesDataController = new GetCategoriesDataController()

// users home 
router.post('/universe/v1/register', createUserController.handle)

// products

router.post('/universe/v1/products', createProductController.handle)

router.get('/universe/v1/products', getProductsDataController.getProductByCode)

router.get('/universe/v1/products/homepage', getProductsDataController.getProductsTopPage)

router.get('/universe/v1/products/category/:code', getCategoriesDataController.getCategoryByCode)

router.get('/universe/v1/products/category', getCategoriesDataController.getAllCategories)

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

//Gerencia NET



const callbackPaymentsController = new CallbackPaymentsController()
const createPaymentsController = new CreatePaymentsController()

// let reqGNAlready = null
// async function gerarToken() {
//   reqGNAlready = GNRequest({
//     clientID: process.env.GN_CLIENT_ID,
//     clientSecret: process.env.GN_CLIENT_SECRET
//   });
// }
// gerarToken();
// setInterval( gerarToken, 1000*3300);

// router.post('/universe/v1/payments/{Tokenpix}', (req, res) => {
//   createPaymentsController.handle(req, res, reqGNAlready)
// });

// router.post('/universe/v1/callback/payments(/pix)?', callbackPaymentsController.handle);




export { router }

//Homologação
//<script type='text/javascript'>var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://sandbox.gerencianet.com.br/v1/cdn/ea5cf0589b61bed711840f8e4bf6260a/'+v;s.async=false;s.id='ea5cf0589b61bed711840f8e4bf6260a';if(!document.getElementById('ea5cf0589b61bed711840f8e4bf6260a')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};</script>

//Produção
//'<script type="text/javascript">var s=document.createElement("script");s.type="text/javascript";var v=parseInt(Math.random()*1000000);s.src="https://api.gerencianet.com.br/v1/cdn/ea5cf0589b61bed711840f8e4bf6260a/"+v;s.async=false;s.id="ea5cf0589b61bed711840f8e4bf6260a";if(!document.getElementById("ea5cf0589b61bed711840f8e4bf6260a")){document.getElementsByTagName("head")[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};</script>'