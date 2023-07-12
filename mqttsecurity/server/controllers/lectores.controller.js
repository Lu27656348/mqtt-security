import {pool} from '../db.js';

export const getLectores = async (req,res)=>{
    console.log('Obteniendo lectores');
    const [result] = await pool.query('SELECT * FROM lectores ORDER BY createdAt ASC');
    res.json(result);
}
export const getLector = async (req,res)=>{
    console.log('Obteniendo lector');
    console.log(req.params.id);
    const [result] = await pool.query('SELECT * FROM lectores WHERE id = ?',[req.params.id]);
    res.json(result[0]);
}
export const createLector = async (req,res)=>{
    const {name,last_name,photo,type} = req.body;
    // console.log(req.body);
    const result = await pool.query(
            'INSERT INTO lectores (name,last_name,photo,type) VALUES (?,?,?,?)',
            [name,last_name,photo,type]
        );
    res.json(
        {
            id: result.insertId,
        ...req.body
    }
    );
    

}
export const updateLector = (req,res)=>{
    res.send('Actualizando lector');
}
export const deleteLector = (req,res)=>{
    res.send('Borrando lector');
}
