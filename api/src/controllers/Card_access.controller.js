import Card_access from '../models/Card_access';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllCardAccess = async (req,res) => {
    const search = await Card_access.findAll();
    res.json(search);
}

export const createCardAccess = async (req,res) => {
    const { card_id, area_id, access_date, access_data } = req.body;
    const cardaccess = await Card_access.create({
        card_id: card_id,
        area_id: area_id,
        access_date: access_date,
        access_data: access_data
    },{
        fields: ["card_id", "area_id","access_date","access_data"]
    });
    res.json(card);
};
export const updateCardAccess = async (req,res) => {
    const {  card_id, area_id, access_date, access_data} = req.body;
    const card = await Card_access.findOne({
        where: {
            card_id: card_id,
            area_id: area_id
        }
    });
    card.access_date = access_date;
    card.access_data = access_data;
    const actualizar = await Card_access.save();
    res.json( { mensaje: "Card actualizado correctamente"});
};

export const deleteCardAccess = async (req,res) => {
    const {  card_id, area_id, access_date, access_data} = req.body;
    try {
        const eliminar = await Card_access.destroy({
            where: {
                card_id: card_id,
                area_id: area_id
            }
        });
        res.status(204).json('El Card fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Card", error: error.message })
    }
}

export const findCardAccess = async (req,res) => {
    const {  card_id, area_id } = req.body;
    try {
        const buscar = await Card_access.findOne({
            where: {
                card_id: card_id,
                area_id: area_id
            }
        });
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("Card no encontrada");
    }

}
