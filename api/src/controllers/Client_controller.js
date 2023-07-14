import Client from '../models/Client.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllClient = async (req,res) => {
    const search = await Client.findAll();
    res.json(search);
}

export const createClient = async (req,res) => {
    const { name, password } = req.body;
    const client = await Client.create({
        name: name, 
        password: password
    },{
        fields: ["name","password"]
    });
    res.json(client);
};

export const deleteClient = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Client.destroy({
            where: {
                client_id_id: id
            }
        });
        res.status(204).json('El Cliente fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Cliente", error: error.message })
    }
}

export const authClient = async (req,res) => {
    const { name, password } = req.body;
    try {
        const buscar = await Client.findOne(
            {
                where: {
                    name: name,
                    password: password
                }
            }
        );
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json({error: "No existe el usuario en la base de datos"});
    }

}
