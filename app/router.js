import express from 'express'; 
import { mainController } from './controllers/maincontroller.js';


const router = express.Router();

router.get('/', mainController.homePage);
router.get('/catalogue', mainController.booksPage);
router.get('/detail/:id', mainController.detailPage);
router.get('/boutique', mainController.boutiquePage);
router.use('/',mainController.errorPage)
export default router;