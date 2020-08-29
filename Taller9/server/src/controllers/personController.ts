import {Request, Response} from 'express';

import pool from '../database'

class PersonController {

    public person (req: Request, res: Response) { 
        pool.query('Describe persona');
        res.json('Persons');
    }/* Metodo que me retorna la ruta principal */

}

export const  personController = new PersonController();