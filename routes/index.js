const express = require('express');
const router = express.Router();

const getQueue = require('../controllers/getQueue');

router.get('/queue-status', (req, res) => {
  res.json(getQueue());
});

module.exports = router;