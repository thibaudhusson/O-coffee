import express from 'express'; 
import { mainController } from './controllers/maincontroller.js';


const router = express.Router();

router.get('/', mainController.homePage);
router.get('/catalogue', mainController.booksPage);
router.get('/detail/:id', mainController.detailPage);
router.get('/boutique', mainController.boutiquePage);
router.get('/favoris',mainController.favorisPage);
router.get('/favoris/add/:id',mainController.addFavPage);
router.get('/favoris/delete/:id',mainController.deleteFavPage);
router.use('/',mainController.errorPage);

export default router;