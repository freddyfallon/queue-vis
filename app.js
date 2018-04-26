const fillQueue = require('./producer');
const amqplib = require('amqplib');

amqplib.connect('amqp://rabbitmq')
  .then(conn => conn.createChannel()
  .then(ch => Array.from({length: 10000}).forEach((element, index) => {
    fillQueue(ch, 'shitty queue', `Message number: ${index}`);
  })));


