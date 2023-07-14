import Card_access_points from '../models/Card_access_point.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllCardAccessPoints = async (req,res) => {
    const search = await Card_access_points.findAll();
    res.json(search);
}

export const createCardAccessPoints = async (req,res) => {
    const { card_id, area_id } = req.body;
    const card_access_point = await Card_access_points.create({
        card_id: card_id,
        area_id: area_id,
    },{
        fields: ["card_id", "area_id"]
    });
    res.json(card_access_point);
};

export const deleteCardAccessPoints = async (req,res) => {
    const {  card_id, area_id } = req.body;
    try {
        const eliminar = await Card_access_points.destroy({
            where: {
                card_id: card_id,
                area_id: area_id
            }
        });
        res.status(204).json('El Card_access_points fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Card_access_points", error: error.message })
    }
}

export const findCardAccessPoints = async (req,res) => {
    const {  card_id, area_id } = req.body;
    try {
        const buscar = await Card_access_points.findOne({
            where: {
                card_id: card_id,
                area_id: area_id
            }
        });
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("Card_access_points no encontrada");
    }

}
