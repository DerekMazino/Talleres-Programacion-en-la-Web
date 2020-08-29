import {Router} from 'express';

class PersonRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', (req, res) => res.send('Persons'));
    }
}

const personRoutes = new PersonRoutes();
export default personRoutes.router;/* Se exporta el enrutador */