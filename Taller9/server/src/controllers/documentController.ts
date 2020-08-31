import {Request, Response} from 'express';

import pool from '../database'

class DocumentController {

    public async listTDocument(req: Request, res: Response) {
        const result = await pool.query('SELECT * FROM tipodocumento', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    

}

export const  documentController = new DocumentController();