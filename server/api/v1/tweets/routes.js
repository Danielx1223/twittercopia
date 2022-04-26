const express = require('express');
// eslint-disable-next-line
const router = express.Router();

// Forma de simplificar tantos get and post
router.route('/').get((req, res, next) => {
  res.json({
    message: 'List of Tweets',
  });
});

module.exports = router;
