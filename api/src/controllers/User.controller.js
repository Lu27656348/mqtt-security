import User from '../models/User.js';
import sequelize from '../database/database_connect.js';
import { QueryTypes } from 'sequelize';

export const getAllUsers = async (req,res) => {
    const search = await User.findAll();
    res.json(search);
}

export const createUser = async (req,res) => {
    const { user_id,password,name, last_name,type } = req.body;
    const user = await User.create({
        user_id: user_id,
        password: password,
        name: name,
        last_name: last_name,
        type: type
    },{
        fields: ["user_id","password","name", "last_name","type"]
    });
    res.json(user);
};
export const updateUser = async (req,res) => {
    const {  user_id,password,name, last_name,type } = req.body;
    const user = await User.findOne({
        where: {
            user_id: user_id
        }
    });
    user.password = password;
    user.name = name;
    user.last_name = last_name;
    user.type = type;

    const actualizar = await User.save();
    res.json( { mensaje: "User actualizado correctamente"});
};

export const insertPhoto = async (req,res) => {
    const {  user_id,photo } = req.body;
    const user = await User.findOne({
        where: {
            user_id: user_id
        }
    });
    user.photo = photo;

    const actualizar = await User.save();
    res.json( { mensaje: "Foto cargada!"});
};

export const deleteUser = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await User.destroy({
            where: {
                user_id: id
            }
        });
        res.status(204).json('El User fue eliminada con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de User", error: error.message })
    }
}

export const findUser = async (req,res) => {
    const id = req.params.id;
    try {
        const buscar = await User.findByPk(id);
        return res.json(buscar);
     } catch (error) {
        return res.status(404).json("User no encontrada");
    }

}
