const express = require('express');
// eslint-disable-next-line
const router = express.Router();

// Traemos las variables
const controller = require('./controller');

/*
 * /api/v1/tweets        POST   Created
 * /api/v1/tweets        GET    Read all
 * /api/v1/tweets/:id    GET    Read
 * /api/v1/tweets/:id    PUT    Update
 * /api/v1/tweets/:id    DELETE Delete
 */

// Forma de simplificar tantos get and post
router.route('/').get(controller.all).post(controller.create);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.delete);

module.exports = router;
