import express from "express"
import cors from "cors"

//Recordar meter esto en una variable de entorno
const secret = 'sistemasdistribuidos2023';

let app = express();

import jwt from 'jsonwebtoken';

import routerTopic from './routes/topics.routes.js';
import routerClient from "./routes/client.routes.js"


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(routerTopic);
app.use(routerClient);

app.post('/login', (req,res) => {

    console.log("Datos recibidos del login: ");
    console.log(req.body.usuario);
    console.log(req.body.password);
    fetch("http://localhost:3000/auth/users/authenticate",{
        method: 'POST',
        body: JSON.stringify({
            name: req.body.usuario,
            password: req.body.password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then( response => {
        if(response.status === 200){
            return response.json();
        }else{
            return { error: "error"};
        }
        
    })
    .then( data => {
        console.log("data");
        console.log(data);
        if(!data.error){
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
    
});


export default app;
