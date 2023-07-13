import Rol from '../models/Roles.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllRoles = async (req,res) => {
    const search = await Rol.findAll();
    res.json(search);
}

export const createRol = async (req,res) => {
    const { type } = req.body;
    const rol = await Rol.create({
        type: type,
    },{
        fields: ["type"]
    });
    res.json(rol);
};
export const updateRol = async (req,res) => {
    const { rol_id, type } = req.body;
    const rol = await Rol.findOne({
        where: {
            rol_id: rol_id
        }
    });
    rol.type = type;

    const actualizar = await Rol.save();
    res.json( { mensaje: "Rol actualizado correctamente"});
};

export const deleteRol = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await User.destroy({
            where: {
                rol_id: id
            }
        });
        res.status(204).json('El Rol fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de User", error: error.message })
    }
}

export const findRol = async (req,res) => {
    const id = req.params.id;
    try {
        const buscar = await Rol.findByPk(id);
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("Rol no encontrada");
    }

}
