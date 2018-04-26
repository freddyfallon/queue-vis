const express = require('express');
const router = express.Router();

router.get('/queue-status', (req, res) => {
  res.json({name: 'big'})
});

module.exports = router;