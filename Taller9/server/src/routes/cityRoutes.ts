import {Router} from 'express';
import {cityController} from  '../controllers/cityController'
class CityRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', cityController.listCity);
    }
}

const citiesRoutes = new CityRoutes();
export default citiesRoutes.router;/* Se exporta el enrutador */