const amqplib = require('amqplib');


const consumeQueue = (ch, queueName) => {
  try {
    ch.assertQueue(queueName, {durable: false});
    ch.prefetch(Math.floor(Math.random() * 30 + 1));
    ch.consume(queueName, (message) => {
      console.log(`Received ${message.content.toString()}`)
      setTimeout(() => {
        ch.ack(message);
      }, Math.floor(Math.random() * 2000 + 1) + 1000)
    })
  } catch (err) {
    console.error('🔴', err)
  }
}

module.exports = consumeQueue;