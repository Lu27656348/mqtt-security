import Devices from '../models/Devices.js';
import Card from '../models/Card.js';
import User from '../models/User.js'
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
    const { device_id, type, area_id } = req.body;
    try {
        const device_topic = await sequelize.query("SELECT obtener_topicos_area(:area_id)",{
            replacements: {
                area_id: area_id
            },
            type: sequelize.QueryTypes.SELECT
        });

        const device = await Devices.create({
            device_id: device_id,
            topic_res: device_topic[0].obtener_topicos_area.toString(),
            topic_req: device_topic[0].obtener_topicos_area.toString() +'/escucha',
            type: type,
            area_id: area_id
        },{
            fields: ["device_id","topic_res", "topic_req","type","area_id"]
        });

        fetch("http://localhost:3031/mqtt/subscribe", {
                method: 'POST',
                body: JSON.stringify({
                  topic: device.topic_res,
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
        });

        res.status(200).json(device);

    } catch (error) {
        res.status(404).json({message: "Error durante la creación de dispositivo", error: error})
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

        const timeValidationQuery = ` 
        SELECT Artime.*, permisos_tarjeta.area_topic
            FROM (SELECT p_rol.area_id,p_rol.area_topic
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
            SELECT Ar.area_id, Ar.area_topic
            FROM Areas AS Ar, Cards AS Ca, Card_access_points AS CAP
            WHERE Ca.card_id = :card_id
            AND Ar.area_id = CAP.area_id) AS permisos_tarjeta,
			Areas_time AS Artime
            WHERE Artime.area_id = permisos_tarjeta.area_id
            AND EXTRACT(DOW FROM NOW()) = Artime.day_value`
        if(device && card){
            //Primero extraemos todos los permisos asociados a la carta
            sequelize.query(timeValidationQuery, {
                replacements: {
                    card_id: card_id
                },
                type: sequelize.QueryTypes.SELECT
            })
            .then( response => {
                
                if(response){
                    //Comparamos todos los permisos con el topico principal del device y si coincide con alguno, es un usuario autorizado
                    console.log('obteniendo datos');
                    console.log(response)
                    const promises = response.map(topic => {
                        let respuesta = sequelize.query("SELECT obtener_topicos_area(:topic)", {
                          replacements: {
                            topic: topic.area_id
                          },
                          type: sequelize.QueryTypes.SELECT
                        }).then( response => {
                            console.log("PROMISES");
                            console.log(response)
                            if(response[0].obtener_topicos_area == device.topic_res ){
                                const entryAdd = sequelize.query("INSERT INTO CARD_ACCESS(card_id, area_id, access_data) VALUES (:card_id,:area_id,:access_data)", {
                                    replacements: {
                                        card_id: card.card_id,
                                        area_id: device.area_id,
                                        access_data: 'OK'
                                    },
                                    type: sequelize.QueryTypes.SELECT
                                  });
                                res.status(200).json({status: "OK"})
                                return true
                              }
                        });
                        /*
                        if(respuesta[0].obtener_topicos_area == device.topic_res ){
                          const entryAdd = sequelize.query("INSERT INTO CARD_ACCESS(card_id, area_id, access_data) VALUES (:card_id,:area_id,:access_data)", {
                              replacements: {
                                  card_id: card.card_id,
                                  area_id: device.area_id,
                                  access_data: 'OK'
                              },
                              type: sequelize.QueryTypes.SELECT
                            });
                          return res.status(200).json({status: "OK"})
                        }

                        await Promise.all(promises);
                        */
                       return respuesta;
                      });

                      Promise.all(promises)
                      .then((results) => {
                        const index = results.indexOf(true);
                        if(index === -1){
                            const entryAdd = sequelize.query("INSERT INTO CARD_ACCESS(card_id, area_id, access_data) VALUES (:card_id,:area_id,:access_data)", {
                                replacements: {
                                    card_id: card.card_id,
                                    area_id: device.area_id,
                                    access_data: 'DENIED'
                                },
                                type: sequelize.QueryTypes.SELECT
                              });
                            return res.status(200).json({status: "DENIED"})
                        }
                      })
                      
       
                }
            })

        }else if(device && card == null){
            return res.status(200).json({status: "denied", message: "Card not found"});
        }else if (device == null && card){
            return res.status(404).json({status: "denied", message: "Device not found"});
        }else{
            return res.status(200).json({status: "denied", message: "Send valid data"});
        }
 
     } catch (error) {
        return res.status(200).json("Error en validacion de permisos");
    }

}

export const countDevices = async (req,res) => {
    try {
        const resultado = {
            total_lectores: 0,
            total_usuarios: 0,
            conectados: 0,
            ingresados: 0
        }

        const total_lectores = sequelize.query("SELECT COUNT(*) FROM DEVICES", {
            type: sequelize.QueryTypes.SELECT
        }).then((response) => {
            return response[0].count
        });

        const total_usuarios = sequelize.query("SELECT COUNT(*) FROM USERS", {
            type: sequelize.QueryTypes.SELECT
        }).then((response) => {
            return response[0].count
        });

        const conectados = sequelize.query(`SELECT (COUNT(*) FILTER (WHERE status = 'ON') * 100.0 / COUNT(*)) AS conectados FROM Devices;`, {
            type: sequelize.QueryTypes.SELECT
        }).then((response) => {
            return response[0].conectados
        });

        const ingresados = sequelize.query(`SELECT COUNT(*) FROM Card_access WHERE date_trunc('day', access_date) = CURRENT_DATE`, {
            type: sequelize.QueryTypes.SELECT
        }).then((response) => {
            return response[0].count
        });

        Promise.all([total_lectores,total_usuarios,conectados,ingresados]).then(
            result => {
                resultado.total_lectores = parseInt(result[0]);
                resultado.total_usuarios =parseInt( result[1]);
                resultado.conectados = parseInt(result[2]);
                resultado.ingresados = parseInt(result[3]);
                return res.status(200).json(resultado)
            }
        )
     
     } catch (error) {
        return res.status(404).json("Error al contar dispositivos");
    }

}