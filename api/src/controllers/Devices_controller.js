import Devices from '../models/Devices.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';
import fetch from "node-fetch";

export const getAllDevices = async (req,res) => {
    const search = await Devices.findAll();
    res.json(search);
}
export const authDevices = async (req,res) => {
    const {name,password} = req.body;

    const search = await Devices.findOne({
        where: {
            name: name,
            password: password
        }
    });
    if(search === null){
        res.status(404).json({menssage: "El usuario no existe en la base de datos"});
        return;
    }
    res.status(200).json(search);
}

export const createDevices = async (req,res) => {
    //consultar si existe topic_res en device
    console.log('entra')
    const { topic_res,type, area_id} = req.body;
    const device = await Devices.create({
        topic_res: topic_res,
        topic_req: topic_res+'/escucha',
        type: type,
        area_id: area_id
    },{
        fields: ["topic_res", "topic_req","type","area_id"]
    });
    if(device){
        fetch("http://localhost:3031/mqtt/subscribe", {
            method: 'POST',
            body: JSON.stringify({
              topic: device.topic_res,
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          res.json(device);
    }else{
        res.json( {error: "El topico ya existe en la bdd" });
    }
};


export const updateDevices = async (req,res) => {
    const {device_id, topic_res,type, area_id} = req.body;
    const device = await Devices.findOne({
        where: {
            device_id: device_id
        }
    });
    if(device){
        fetch("http://localhost:3031/mqtt/updatesubscribe", {
            method: 'POST',
            body: JSON.stringify({
              viejo: device.topic_res,
              nuevo: topic_res,
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
    }
    device.topic_res = topic_res;
    device.topic_req= topic_res+'/escucha';
    device.type = type;
    device.area_id = area_id;
    const actualizar = await device.save();

    res.json( { mensaje: "Device actualizado correctamente"});
};

export const deleteDevices = async (req,res) => {
    const id = req.params.id;
    let device = "consulta";
    if(device){
        fetch("http://localhost:3031/mqtt/unsubscribe", {
            method: 'POST',
            body: JSON.stringify({
              topic: device.topic_res,
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
    }
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
