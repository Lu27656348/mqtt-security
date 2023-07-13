import express from "express"
import cors from "cors"
import fetch from "node-fetch";

//Recordar meter esto en una variable de entorno
const secret = 'sistemasdistribuidos2023';

let app = express();

import jwt from 'jsonwebtoken';

import routerAreas from './routes/areas.routes.js';
import routerDevices from './routes/devices.routes.js';
import routerUser from './routes/user.routes.js'
import routerRol from './routes/Rol.routes.js';
import routerCard from './routes/card.routes.js'
import routerTree from './routes/Areas_tree.routes.js'


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(routerAreas);
app.use(routerDevices);
app.use(routerUser);
app.use(routerRol);
app.use(routerCard);
app.use(routerTree);

app.post('/login', (req, res) => {
    
    if (!req.body.usuario || !req.body.password) {
      return res.status(400).json({
        error: "Los campos de usuario y contraseña son obligatorios"
      });
    }
    
    console.log(req.body.usuario);
    console.log(req.body.password);
    
    fetch("http://localhost:3030/authenticate", {
      method: 'POST',
      body: JSON.stringify({
        name: req.body.usuario,
        password: req.body.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return { error: "Error en autenticacion de usuario" };
      }
    })
    .then(data => {
      console.log("data");
      console.log(data);
      if (!data.error) {
        const payload = {
          check: true
        };
        const token = jwt.sign(payload, secret, {
          expiresIn: '1d'
        });
        res.json({
          token: token,
          message: "Usuario autenticado - Bienvenido"
        });
      } else {
        res.status(401).json(data);
      }
    })
    .catch(error => {
      console.log("error -> " + error);
      res.status(500).json({
        error: "Ha ocurrido un error en el servidor"
      });
    });
  });


export default app;
