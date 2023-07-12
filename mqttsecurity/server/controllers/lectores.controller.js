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
    if (result.length === 0)
       return  res.status(404).json({message: 'Lector no encontrado'});
    res.json(result[0]);
}
export const createLector = async (req,res)=>{
    console.log('Creando lector');
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
export const updateLector = async (req, res) => {
    console.log('Actualizando lector');
    const id = req.params.id;
    const { name, last_name, photo, type } = req.body;
    const [result] = await pool.query('UPDATE lectores SET name = ?, last_name = ?, photo = ?, type = ? WHERE id = ?', [name, last_name, photo, type, id]);
    if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Lector no encontrado' });
    }
    res.json({ message: 'Lector actualizado correctamente' });
};

export const deleteLector = async (req, res) => {
    console.log('Eliminando lector');
    const id = req.params.id;
    const [result] = await pool.query('DELETE FROM lectores WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Lector no encontrado' });
    }
    res.json({ message: 'Lector eliminado correctamente' });
};