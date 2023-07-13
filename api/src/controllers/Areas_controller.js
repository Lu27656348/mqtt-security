import Areas from '../models/Areas.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllAreas = async (req,res) => {
    const search = await Areas.findAll();
    res.json(search);
}

export const createArea = async (req,res) => {
    const { area_topic,level,description } = req.body;
    const topic = await Areas.create({
        area_topic: area_topic,
        level: level,
        description: description
    },{
        fields: ["area_topic","level","description"]
    });
    res.json(topic);
};
export const updateAreas= async (req,res) => {
    const { area_id,area_topic,level,description } = req.body;
    const topic = await Areas.findOne({
        where: {
            area_id: area_id
        }
    });
    topic.area_topic = area_topic;
    topic.level = level;
    topic.description = description;

    const actualizar = await topic.save();
    res.json( { mensaje: "Area actualizada correctamente"});
};

export const deleteAreas = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Areas.destroy({
            where: {
                area_id: id
            }
        });
        res.status(204).json('El Area fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Area", error: error.message })
    }
}

export const findAreas = async (req,res) => {
    const id = req.params.id;
    try {
        const buscar = await Areas.findByPk(id);
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("Area no encontrada");
    }

}
