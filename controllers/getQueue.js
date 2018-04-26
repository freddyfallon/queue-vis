const request = require('request-promise-native');

const getQueue = async () => {
  try {
    const result = await request({
      method: 'GET',
      uri: 'http://guest:guest@rabbitmq:5672/api/queues/%2f/cool%20queue',
      transform: true,
      resolveWithFullResponse: true,
      headers: {
        'Content-Type': 'application/json'
      }
  }) 
  } catch (err) {
    console.error('🔴', err)
  }
}

module.exports = getQueue;