const express = require('express');
// eslint-disable-next-line
const router = express.Router();

// Traemos las variables
const controller = require('./controller');

const { auth, owner } = require('../auth');

/*
 * /api/v1/tweets        POST   Created
 * /api/v1/tweets        GET    Read all
 * /api/v1/tweets/:id    GET    Read
 * /api/v1/tweets/:id    PUT    Update
 * /api/v1/tweets/:id    DELETE Delete
 */

// Forma de simplificar tantos get and post, para crear un tweet tengo que estar autenticado
router.route('/').get(controller.all).post(auth, controller.create);

router.param('id', controller.id); // Acceso directo, Primero es este middelware  y después pasamos a los otros.

router
  .route('/:id')
  .get(controller.read)
  .put(auth, owner, controller.update)
  .patch(auth, owner, controller.update)
  .delete(auth, owner, controller.delete);

module.exports = router;
