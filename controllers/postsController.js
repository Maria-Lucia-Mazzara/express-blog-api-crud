
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

// Questa funzione gestisce la rotta SHOW e restituisce il dettaglio di un singolo post.
// 1. Recuperiamo l'id dal parametro dinamico dell'URL (es: /posts/3 → id = 3).
// 2. Convertiamo l'id in numero perché i parametri arrivano sempre come stringhe.
// 3. Cerchiamo il post corrispondente nell'array usando il metodo find().
// 4. Se il post NON esiste, rispondiamo con uno stato 404 e un messaggio di errore in formato JSON.
// 5. Se il post esiste, lo restituiamo al client sotto forma di JSON.
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


// // risposta con un messaggio
// function store(req, res) {
//     res.send("Creazione nuovo post");
// }

// function store(req, res) {
//     console.log("Dati ricevuti dal client:", req.body);
//     res.send("Creazione nuovo post");
// }

const store = (req, res) => {


    const newPost = {
        id: Date.now(),
        ...req.body
    }

    posts.push(newPost);

    res.status(201).json(newPost);

    console.log(newPost);

}



// function update(req, res) {
//     res.send("Modifica integrale del post " + req.params.id);
// }

const update = (req, res) => {

    const id = Number(req.params.id);

    const foundPost = posts.find(post => post.id === id);

    if (!foundPost) {
        return res.status(418).json({
            error: "Not Found",
            message: "I'm a teapot"
        });
    }

    foundPost.title = req.body.title;
    foundPost.content = req.body.content;
    foundPost.image = req.body.image;

    console.log(posts);

    res.json(foundPost);
}


function modify(req, res) {
    res.send("Modifica parziale del post " + req.params.id);
}
// // qui elimino un singolo elemento
// function destroy(req, res) {
//     res.send("Eliminazione del post " + req.params.id);
// };

// Questa funzione gestisce la rotta DESTROY ed elimina un singolo post dalla lista.
// 1. Recuperiamo l'id del post da eliminare dal parametro dinamico dell'URL (es: /posts/3).
// 2. Convertiamo l'id in numero perché i parametri arrivano come stringhe.
// 3. Filtriamo l'array rimuovendo il post con l'id indicato, creando una lista aggiornata.
// 4. Stampiamo nel terminale la nuova lista per verificare l'eliminazione.
// 5. Rispondiamo al client con lo stato 204 (No Content), che indica che l'operazione
//    è andata a buon fine ma non c’è nessun contenuto da restituire.
function destroy(req, res) {
    const id = parseInt(req.params.id);

    posts = posts.filter((post) => post.id !== id);
    console.log("changed list", posts);
    res.status(204).send();
}

module.exports = { index, show, store, update, modify, destroy };
// esporto le funzioni

