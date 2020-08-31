import {Request, Response} from 'express';

import pool from '../database'

class CityController {

    public async listCity(req: Request, res: Response) {
        const result = await pool.query('SELECT * FROM ciudad', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    

}

export const  cityController = new CityController();