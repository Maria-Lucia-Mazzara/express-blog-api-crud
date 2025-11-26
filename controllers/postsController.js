
let posts = require('../dati/posts_array');

// questo codice ha il compito di preparare la risposta e mandarla al client

// // raccoglie tutta la lista
// function index(req, res) {
//     res.send("Lista dei post");
// }

// restituisce l’array completo in formato JSON
function index(req, res) {
    res.json(posts);
}

// // risposta con i dettagli richiesti
// function show(req, res) {
//     res.send("Dettagli del post " + req.params.id);
// }

function show(req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    res.json(post);
}


// risposta con un messaggio
function store(req, res) {
    res.send("Creazione nuovo post");
}
function update(req, res) {
    res.send("Modifica integrale del post " + req.params.id);
}

function modify(req, res) {
    res.send("Modifica parziale del post " + req.params.id);
}
// // qui elimino un singolo elemento
// function destroy(req, res) {
//     res.send("Eliminazione del post " + req.params.id);
// };

function destroy(req, res) {
    const id = parseInt(req.params.id);

    posts = posts.filter((post) => post.id !== id);
    console.log("changed list", posts);
    res.status(204).send();
}

module.exports = { index, show, store, update, modify, destroy };
// esporto le funzioni

