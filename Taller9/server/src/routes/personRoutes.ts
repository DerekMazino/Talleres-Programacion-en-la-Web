import {Router} from 'express';
import {personController} from  '../controllers/personController'
class PersonRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', personController.person);
    }
}

const personRoutes = new PersonRoutes();
export default personRoutes.router;/* Se exporta el enrutador */