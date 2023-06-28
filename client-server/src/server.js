const express = require('express');
const app = express();
const mqtt = require('mqtt');
import axios from "./api/axios";

app.use(express.json());

const client  = mqtt.connect(process.env.MQTT_BROKER);
const token = '';

//Conectarse al broker MQTT
client.on('connect', () => {
  console.log('Connected');
  //hacer login
  var data ={
            usuario: 'Luis',
            password:'Hola',
          };

  axios.post(`auth/authorizacion`,data)
  .then(response => {
      if(response.data.token){
        this.token=response.data.token;
      }
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Custom-Header': 'Custom-Value'
      };
      //obtener todos los topicos y suscribirse
      axios.get(`auth/all-topic`, {
        headers: headers
      })
      .then(response => {
          // const topics = response.data; 
          // topics.forEach(topic => {
          //   client.subscribe(topic, (err) => {
          //     if (err) {
          //       console.error('Error al suscribirse al topic:', topic);
          //     }
          //   });
          // }); 
          console.log('hola');
          res.status(200).send('OK');
        })
        .catch(error => {
          console.error('Error al obtener la lista de tópicos:', error);
          res.status(500).send('Error al obtener la lista de tópicos');
        });
  })
  .catch(error => {
    console.error('No se pudo hacer login:', error);
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

//Recibe los mensajes que vienen del broker
client.on('message', function (topic, message) {
  console.log('Mensaje recibido en el topic:', topic, 'mensaje: ', message.toString());

  // Parsear el mensaje como JSON
  const data = JSON.parse(message.toString());

  // Enviar una petición POST al Aplication Server para validar permisos y retornar respuesta al broker
  axios.post('auth/validation-permission', data)
  .then(response => {    
    // Comprobar si el campo "status" de la respuesta es "success"
    if (response.data.status === 'success') {
      // Si el campo "status" es "success", publicar la respuesta en el broker MQTT
      client.publish(`${topic}/escucha`, JSON.stringify(response.data));
    } else {
      // Si el campo "status" no es "success", no publicar la respuesta
      console.log('El mensaje recibido no es proveniente de un lector valido');
    }
  })
  .catch(error => {
    console.error('Error al enviar la petición POST:', error);
  });
});

app.listen(process.env.PORT || 3030, function () {
  console.log(`Server listening on port ${process.env.PORT || 3030}`);
});