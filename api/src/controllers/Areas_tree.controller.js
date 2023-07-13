import Areas_tree from '../models/Areas_tree.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllAreasTree = async (req,res) => {
    const search = await Areas_tree.findAll();
    res.json(search);
}

export const createAreaTree = async (req,res) => {
    const { area_id1, area_id2 } = req.body;
    const area_tree = await Areas_tree.create({
        area_id1: area_id1,
        area_id2: area_id2
    },{
        fields: ["area_id1","area_id2"]
    });
    res.json(area_tree);
};


export const deleteAreaTree = async (req,res) => {
    const { area_id1, area_id2 } = req.body;
    try {
        const eliminar = await Areas_tree.destroy({
            where: {
                area_id1: area_id1,
                area_id2: area_id2
            }
        });
        res.status(204).json('El Area fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Areas_tree", error: error.message })
    }
}

export const findAreaTree = async (req,res) => {
    const { area_id1, area_id2 } = req.body;
    try {
        const buscar = await Areas_tree.findOne({
            where: {
                area_id1: area_id1,
                area_id2: area_id2
            }
        });
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("Areas_tree no encontrada");
    }

}
