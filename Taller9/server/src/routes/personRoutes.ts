import {Router} from 'express';
import {personController} from  '../controllers/personController'
class PersonRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', personController.listPerson);
        this.router.get('/:id', personController.getOne);
        this.router.post('/', personController.create);
        this.router.delete('/:id', personController.delete);
        this.router.put('/:id', personController.update);
    }
}

const personRoutes = new PersonRoutes();
export default personRoutes.router;/* Se exporta el enrutador */