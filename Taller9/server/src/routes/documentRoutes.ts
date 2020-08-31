import {Router} from 'express';
import {documentController} from  '../controllers/documentController'
class DocumentRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', documentController.listTDocument);
    }
}

const documentRoutes = new DocumentRoutes();
export default documentRoutes.router;/* Se exporta el enrutador */