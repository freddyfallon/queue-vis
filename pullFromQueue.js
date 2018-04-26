const consumeQueue = require('./consumer');
const amqplib = require('amqplib');


amqplib.connect('amqp://rabbitmq')
  .then(conn => conn.createChannel()
  .then(ch => consumeQueue(ch, 'shitty queue')));