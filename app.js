const fillQueue = require('./producer');
const amqplib = require('amqplib');
const express = require('express');
const helmet = require('helmet');
const routes = require('./routes/index');

amqplib.connect('amqp://rabbitmq')
  .then(conn => conn.createChannel()
  .then(ch => Array.from({length: 10000}).forEach((element, index) => {
    fillQueue(ch, 'shitty queue', `Message number: ${index}`);
  })));
const app = express();

app.use(helmet());

app.use('/', routes);

app.set('port', 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Service running → PORT ${server.address().port}`);
  
  console.log(`To populate the queue: node addToQueue.js
To consume the queue: node pullFromQueue.js`)
});