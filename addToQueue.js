const fillQueue = require('./producer');
const amqplib = require('amqplib');

amqplib.connect('amqp://rabbitmq')
  .then(conn => conn.createChannel()
  .then(ch => 
    setInterval(() => {
      Array.from({length: Math.floor(Math.random() * 800 + 1)}).forEach(() => {
        fillQueue(ch, 'cool queue', `Message number: ${Math.floor(Math.random() * 1000 + 1)}`)
      })
    }, Math.floor(Math.random() * 2000 + 1) + 1000)
  ));


