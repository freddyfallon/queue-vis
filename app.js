const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.use(helmet());
app.use(bodyParser());

app.use('/', routes);

app.set('port', 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Service running → PORT ${server.address().port}`);
  
  console.log(`To populate the queue: node addToQueue.js
To consume the queue: node pullFromQueue.js`)
});