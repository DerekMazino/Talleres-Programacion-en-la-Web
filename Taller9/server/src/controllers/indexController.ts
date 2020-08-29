import {Request, Response} from 'express';

class IndexController {

    public index (req: Request, res: Response) { 
        res.json({text: 'API is /api/persons'})
    }/* Metodo que me retorna la ruta principal */

}

export const  indexController = new IndexController();