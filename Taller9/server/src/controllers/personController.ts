import {Request, Response} from 'express';

import pool from '../database'

class PersonController {

    public async listPerson (req: Request, res: Response) {
        const result = await pool.query('SELECT * FROM persona', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getOne(req: Request, res: Response): Promise<void>{
        const {id}=req.params;
        await pool.query('SELECT * FROM persona WHERE id_persona = ?', [id], (error, result) => {
            if (error) throw error;

            res.send(result);
            
            /* res.status(404).json({text: "The person doesn't exists"}); */
        });
    }
    public async create(req: Request, res: Response): Promise<void> {
        /* const result = await pool.query('INSERT INTO persona set ?', [req.body]); */
        await pool.query('INSERT INTO persona SET ?', req.body, (error, result) => {
            if (error) throw error;
    
            res.json({ message: 'Persona Saved' });
        });
        /* console.log(result); */ 
        
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id}=req.params;
        await pool.query('Delete From persona WHERE id_persona = ?', [id], (error, result) => {
            if (error) throw error;
            
            res.send('Person deleted.');
            
        });
    }

    public async update(req: Request, res: Response): Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE persona SET ? WHERE id_persona = ?', [req.body, id], (error, result) => {
            if (error) throw error;
    
            res.send('Person updated successfully.');
        });
    }

}

export const  personController = new PersonController();