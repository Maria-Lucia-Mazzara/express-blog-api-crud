const express = require('express')
const router = express.Router()
const array = require('../dati/posts_array')


router.get('/', (req, res) => {
    res.send(array);
});

router.get('/:id', (req, res) => {
    res.send(`cibo id: ${req.params.id}`);
})

router.post('/', (req, res) => {
    res.send('mostro nuova array cibo')
})
module.exports = router;