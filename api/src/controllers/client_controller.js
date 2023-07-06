import Client from '../models/Client.js';
import sequelize from '../database/database_connect.js';

export const getAllClients = async (req,res) => {
    const search = await Client.findAll();
    res.json(search);
}

export const getClientById = async (req,res) => {
    const {client_id} = req.params;
    const search = await Client.findByPk(client_id);
    res.json(search);
}

export const authClient = async (req,res) => {
    const {name,password} = req.body;
    const search = await Client.findOne({
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