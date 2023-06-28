const express = require('express');
const cors = require('cors');

//Recordar meter esto en una variable de entorno
const secret = 'sistemasdistribuidos2023';


let app = express();
const jwt = require('jsonwebtoken');

const { routerTopic } = require('./routes/topics.routes.js');


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(routerTopic);

app.post('auth/authorization', (req,res) => {
    if(req.body.usuario == 'Luis' && req.body.password == 'Hola'){
        const payload = {
            check: true
        }
        const token = jwt.sign(payload,secret,{
            expiresIn: '1d'
        });
        res.json({
            token: token,
            menssage: "Usuario autenticado - Bienvenido"
        })
    }else{
        res.json({
            message: "Error en autenticacion de usuario"
        })
    }
});


module.exports = app
