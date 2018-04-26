const amqplib = require('amqplib');

const consumeQueue = async (ch, queueName) => {
  try {
    ch.assertQueue(queueName, {durable: false});
    ch.consume(queueName, message => {console.log(`Received ${message.toString()}`), {noAck: true}})
  } catch (err) {
    console.error('🔴', err)
  }
}

module.exports = consumeQueue;