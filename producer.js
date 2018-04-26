const amqplib = require('amqplib');

const fillQueue = async (ch, queueName, message) => {
  try {
    ch.assertQueue(queueName, {durable: false});
    ch.sendToQueue(queueName, Buffer.from(message))
    console.log(`Sent ${message}`)
  } catch (err) {
    console.error('🔴', err)
  }
}

module.exports = fillQueue;