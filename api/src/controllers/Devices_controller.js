import Devices from '../models/Devices.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllDevices = async (req,res) => {
    const search = await Devices.findAll();
    res.json(search);
}

export const createDevices = async (req,res) => {
    const { topic_res,topic_req,type, area_id} = req.body;
    const device = await Devices.create({
        topic_res: topic_res,
        topic_req: topic_req,
        type: type,
        area_id: area_id
    },{
        fields: ["topic_res","topic_req","type", "area_id"]
    });
    res.json(device);
};
export const updateDevices = async (req,res) => {
    const {device_id, topic_res,topic_req,type, area_id} = req.body;
    const device = await Devices.findOne({
        where: {
            device_id: device_id
        }
    });
    device.topic_res = topic_res;
    device.topic_req = topic_req;
    device.type = type;
    device.area_id = area_id;

    const actualizar = await device.save();
    res.json( { mensaje: "Device actualizado correctamente"});
};

export const deleteDevices = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Devices.destroy({
            where: {
                device_id: id
            }
        });
        res.status(204).json('El Device fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Device", error: error.message })
    }
}

export const findDevices = async (req,res) => {
    const id = req.params.id;
    try {
        const buscar = await Devices.findByPk(id);
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("Area no encontrada");
    }

}
