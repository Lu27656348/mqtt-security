import express from 'express';
const app = express();
import mqtt from 'mqtt';
import axios from 'axios';
import {config} from 'dotenv'

config()

app.use(express.json());

const client  = mqtt.connect('tcp://localhost:1883');
let token = '';
const credenciales = {
  usuario: 'Oliver',
  password: 'admin'
};
const cabecera = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Custom-Header': 'Custom-Value'
};

//Conectarse al broker MQTT
client.on('connect', () => {
  console.log('Connected');
  
  axios.post('http://localhost:3030/login', credenciales, { headers: cabecera })
  .then(function (response) {
      token = response.data.token;
      //obtener todos los topicos para suscribirse
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Custom-Header': 'Custom-Value'
      };
    
      axios.get('http://localhost:3030/auth/devices', {headers: headers})
      .then(function (response) {
        const topics = response.data; 
        if(topics.length == 0)
          return res.status(204).send('No se encontraron tópicos');
        topics.forEach(topic => {
          let nombre = topic.topic_res;
          console.log(nombre);
          client.subscribe(nombre);
        }); 
      })
      .catch(error => {
        console.error('Error al obtener la lista de tópicos:', error);
      });
  })
  .catch(function (error) {
    console.log('Error al hacer login');
  });
});

//Suscribirse a un topico (Nuevo Lector)
app.post('/mqtt/subscribe', (req, res) => {
  const { topic } = req.body;
  if (!topic) {
    return res.status(400).send('Debe proporcionar un topic');
  }
  
  client.subscribe(topic, (err) => {
    if (err) {
      console.error('Error al suscribirse al topic:', topic);
      res.status(500).send('Error al suscribirse al topic');
    } else {
      console.log('Suscrito al topic:', topic);
      res.status(200).send('Suscrito al topic: ' + topic);
    }
  });
});

//Des-suscribirse de un topico (eliminar lector)
app.post('/mqtt/unsubscribe', (req, res) => {
  const { topic } = req.body;
  if (!topic) {
    return res.status(400).send('Debe proporcionar un topic');
  }
  
  client.unsubscribe(topic, (err) => {
    if (err) {
      console.error('Error al desuscribirse del topic:', topic);
      res.status(500).send('Error al desuscribirse del topic');
    } else {
      console.log('Desuscripto del topic:', topic);
      res.status(200).send('Desuscripto del topic: ' + topic);
    }
  });
});

//Actualiza un topico
app.post('/mqtt/updateunsubscribe', (req, res) => {
  const { nuevo,viejo } = req.body;
  if (!nuevo ||  !viejo) {
    return res.status(400).send('Debe proporcionar un topic nuevo y viejo');
  }

  if(nuevo!==viejo){
    client.unsubscribe(viejo, (err) => {
      if (err) {
        console.error('Error al desuscribirse del topic:', viejo);
        res.status(500).send('Error al desuscribirse del topic');
      } else {
        console.log('Desuscripto del topic:', viejo);
        res.status(200).send('Desuscripto del topic: ' + viejo);
      }
    });
    client.subscribe(nuevo, (err) => {
      if (err) {
        console.error('Error al suscribirse al topic:', nuevo);
        res.status(500).send('Error al suscribirse al topic');
      } else {
        console.log('Suscrito al topic:', nuevo);
        res.status(200).send('Suscrito al topic: ' + nuevo);
      }
    });
  }
});

//Recibe los mensajes que vienen del broker
client.on('message', function (topic, message) {
  // console.log('Mensaje recibido en el topic:', topic, 'mensaje: ', message.toString());
  // Parsear el mensaje como JSON
  // Convertir el mensaje recibido en formato de cadena a un objeto JSON
  const data = JSON.parse(message.toString());

  // Configurar los encabezados de la solicitud
  const headers = {
    'Authorization': `Bearer ${data.token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Custom-Header': 'Custom-Value'
  };
  //Enviar una petición POST al Aplication Server para validar permisos y retornar respuesta al broker
  axios.post('http://localhost:3030/auth/validation-permission', data, { headers: headers })
    .then(function (response) {
      let respuesta = response.data;
      console.log('publica')
      client.publish(`${topic}/escucha`, JSON.stringify(respuesta));
    })
    .catch(function (error) {
      console.error('Error al intentar enviar datos para validar permisos:');
    });
});

app.listen(process.env.PORT || 3031, function () {
  console.log(`Server listening on port ${process.env.PORT || 3031}`);
});

export default client;

