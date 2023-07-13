import Card from '../models//Card.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllCard = async (req,res) => {
    const search = await Card.findAll();
    res.json(search);
}

export const createCard = async (req,res) => {
    const { card_id, status } = req.body;
    const card = await Card.create({
        card_id: card_id,
        status: status
    },{
        fields: ["card_id", "status"]
    });
    res.json(card);
};
export const updateCard = async (req,res) => {
    const { card_id, status } = req.body;
    const card = await Card.findOne({
        where: {
            card_id: card_id
        }
    });
    card.status = status;

    const actualizar = await Card.save();
    res.json( { mensaje: "Card actualizado correctamente"});
};

export const deleteCard = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Card.destroy({
            where: {
                card_id: id
            }
        });
        res.status(204).json('El Card fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Card", error: error.message })
    }
}

export const findCard = async (req,res) => {
    const id = req.params.id;
    try {
        const buscar = await Card.findByPk(id);
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("Card no encontrada");
    }

}
