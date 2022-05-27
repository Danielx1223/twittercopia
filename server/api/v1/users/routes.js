const express = require('express');
// eslint-disable-next-line
const router = express.Router();

// Traemos las variables
const controller = require('./controller');

/*
 * /api/v1/users/signup        POST   Created
 * /api/v1/users/signin        POST    Read all
 * /api/v1/users/:id    GET    Read
 * /api/v1/users/:id    PUT    Update
 * /api/v1/users/:id    DELETE Delete
 */

// Forma de simplificar tantos get and post
router.route('/signin').post(controller.signin);
router.route('/signup').post(controller.signup);

router.param('id', controller.id); // Acceso directo, Primero es este middelware  y después pasamos a los otros.

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.delete);

module.exports = router;
