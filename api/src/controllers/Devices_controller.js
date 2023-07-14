import Devices from '../models/Devices.js';
import Card from '../models/Card.js'
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
    let device = await Devices.findOne({
        where: {
            device_id: id
        }
    });

    
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

export const changeStatus = async (req,res) => {
    const id = req.params.id;
    try {
        const device = await Devices.findByPk(id);

        device.status = device.status === "OFF" ? "ON" : "OFF";
        const actualizar = await device.save();
        return res.json(device);
     } catch (error) {
        return res.status(404).json("Area no encontrada");
    }

}

export const validatePermission = async (req,res) => {
    const { card_id, device_id } = req.body;
    try {
        const device = await Devices.findByPk(device_id);
        const card = await Card.findByPk(card_id);
        if(device && card){
            //Primero extraemos todos los permisos asociados a la carta
            sequelize.query(`
            SELECT p_rol.area_topic
            FROM (SELECT Ar.area_id,Ar.area_topic
            FROM Areas AS Ar, 
            Cards AS Ca,
            Roles AS Ro, 
            roles_access_points AS RAP, 
            User_types AS UT,
	        User_cards AS UC
            WHERE Ca.card_id = :card_id
            AND UC.card_id = Ca.card_id
            AND UC.user_id = UT.user_id
            AND UT.rol_id = RAP.rol_id
            AND Ar.area_id = RAP.area_id) AS p_rol
            UNION 
            SELECT Ar.area_topic
            FROM Areas AS Ar, Cards AS Ca, Card_access_points AS CAP
            WHERE Ca.card_id = :card_id
            AND Ar.area_id = CAP.area_id
            `, {
                replacements: {
                    card_id: card_id
                },
                type: sequelize.QueryTypes.SELECT
            })
            .then( response => {
                
                if(response){
                    //Comparamos todos los permisos con el topico principal del device y si coincide con alguno, es un usuario autorizado
                    let flag = 0;
                    response.forEach( (topic) => {
                        if (topic.area_topic == device.topic_res){
                            if(device.type == "1"){
                                flag = 1;
                            }
                        }
                    });
                    if(flag === 1){
                        return res.status(200).json({
                            status: "OK",
                        })
                    }
                    return res.status(500).json({
                        status: "denied",
                        message: "User have no permission for this area"
                    })
                }
            })

        }else if(device && card == null){
            return res.status(404).json({status: "denied", message: "Card not found"});
        }else if (device == null && card){
            return res.status(404).json({status: "denied", message: "Device not found"});
        }else{
            return res.status(404).json({status: "denied", message: "Send valid data"});
        }
 
     } catch (error) {
        return res.status(404).json("Error en validacion de permisos");
    }

}