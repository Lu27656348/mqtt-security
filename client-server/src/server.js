const express = require('express'); 
const app = express();
const mqtt = require('mqtt');
const axios = require ('axios');

app.use(express.json());

const client  = mqtt.connect('mqtt://broker.emqx.io:1883');
let token = '';
const credenciales = {
  usuario: 'Nahum',
  password: 'queclave'
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
    
      axios.get('http://localhost:3030/auth/topics', {headers: headers})
      .then(function (response) {
        const topics = response.data; 
        if(topics.length == 0)
          return res.status(204).send('No se encontraron tópicos');
        topics.forEach(topic => {
          let nombre = topic.nombre;
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

//Recibe los mensajes que vienen del broker
client.on('message', function (topic, message) {
  console.log('Mensaje recibido en el topic:', topic, 'mensaje: ', message.toString());
  // Parsear el mensaje como JSON
  // Convertir el mensaje recibido en formato de cadena a un objeto JSON
  const data = JSON.parse(message.toString());

  // Configurar los encabezados de la solicitud
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Custom-Header': 'Custom-Value'
  };

  // Enviar una petición POST al Aplication Server para validar permisos y retornar respuesta al broker
  axios.post('http://localhost:3000/auth/validation-permission', data, { headers: headers })
    .then(function (response) {
      // Comprobar si el campo "status" de la respuesta es "success"
      if (response.data.status === 'success') {
        // Si el campo "status" es "success", publicar la respuesta en el broker MQTT
        client.publish(`${topic}/escucha`, JSON.stringify(response.data));
      } else {
        // Si el campo "status" no es "success", no publicar la respuesta
        console.log('El mensaje recibido no es proveniente de un lector valido');
      }
    })
    .catch(function (error) {
      console.error('Error al intentar enviar datos para validar permisos:');
    });
});

app.listen(process.env.PORT || 3031, function () {
  console.log(`Server listening on port ${process.env.PORT || 3031}`);
});


