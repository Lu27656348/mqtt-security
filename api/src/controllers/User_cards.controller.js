import User_cards from '../models/User_cards.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllUsersCards = async (req,res) => {
    const search = await User_cards.findAll();
    res.json(search);
}

export const createUserCards = async (req,res) => {
    const { user_id,card_id } = req.body;
    const user = await User_cards.create({
        user_id: user_id,
        card_id: card_id
    },{
        fields: ["user_id","card_id"]
    });
    res.json(user);
};

export const deleteUserCards = async (req,res) => {
    const { user_id,card_id } = req.body;
    try {
        const eliminar = await User_cards.destroy({
            where: {
                user_id: user_id,
                card_id: card_id
            }
        });
        res.status(204).json('El User fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de User", error: error.message })
    }
}

export const findUserCards = async (req,res) => {
    const { user_id,card_id } = req.body;
    try {
        const buscar = await User_cards.findOne({
            user_id: user_id,
            card_id: card_id
        });
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("User no encontrada");
    }

}
