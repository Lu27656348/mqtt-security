import Roles_access_points from '../models/Roles_access_points.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllRolesAccessPoints = async (req,res) => {
    const search = await Roles_access_points.findAll();
    res.json(search);
}

export const createRolesAccessPoints = async (req,res) => {
    const { rol_id, area_id } = req.body;
    const rol_access_point = await Roles_access_points.create({
        rol_id: rol_id,
        area_id: area_id,
    },{
        fields: ["rol_id", "area_id"]
    });
    res.json(rol_access_point);
};

export const deleteRolesAccessPoints = async (req,res) => {
    const { rol_id, area_id } = req.body;
    try {
        const eliminar = await Roles_access_points.destroy({
            where: {
                rol_id: rol_id,
                area_id: area_id
            }
        });
        res.status(204).json('El Card_access_points fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Card_access_points", error: error.message })
    }
}

export const findRolesAccessPoints = async (req,res) => {
    const {  rol_id, area_id } = req.body;
    try {
        const buscar = await Roles_access_points.findOne({
            where: {
                rol_id: rol_id,
                area_id: area_id
            }
        });
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("Card_access_points no encontrada");
    }

}
