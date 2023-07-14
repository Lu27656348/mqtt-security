import User_types from '../models/User_types.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllUsersTypes = async (req,res) => {
    const search = await User_types.findAll();
    res.json(search);
}

export const createUserTypes = async (req,res) => {
    const { user_id,rol_id } = req.body;
    const user = await User_types.create({
        user_id: user_id,
        rol_id: rol_id
    },{
        fields: ["user_id","rol_id"]
    });
    res.json(user);
};

export const deleteUserTypes = async (req,res) => {
    const { user_id,rol_id } = req.body;
    try {
        const eliminar = await User_types.destroy({
            where: {
                user_id: user_id,
                rol_id: rol_id
            }
        });
        res.status(204).json('El User fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de User", error: error.message })
    }
}

export const findUserTypes = async (req,res) => {
    const { user_id,rol_id } = req.body;
    try {
        const buscar = await User_types.findOne({
            user_id: user_id,
            rol_id: rol_id
        });
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("User no encontrada");
    }

}
