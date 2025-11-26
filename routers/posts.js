const express = require('express');
const router = express.Router();
// importo il controller che contiene tutte le funzioni CRUD
const postsController = require('../controllers/postsController');

// rotte crud
// Ogni rotta indica "chi" deve rispondere alla richiesta
// (il router smista e il controller esegue la logica)

// INDEX: restituisce la lista dei post
router.get('/', postsController.index);

// SHOW: restituisce il dettaglio di un post tramite ID
router.get('/:id', postsController.show);

// STORE: crea un nuovo post
router.post('/', postsController.store);

// UPDATE: modifica totale di un post
router.put('/:id', postsController.update);

// MODIFY: modifica parziale di un post
router.patch('/:id', postsController.modify);

// DESTROY: elimina un post tramite ID
router.delete('/:id', postsController.destroy);

module.exports = router;
// esportazione del router per usarlo dentro server.js