
// raccoglie tutta la lista
function index(req, res) {
    res.send("Lista dei post");
}

// risposta con i dettagli richiesti
function show(req, res) {
    res.send("Dettagli del post " + req.params.id);
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
// qui elimino un singolo elemento
function destroy(req, res) {
    res.send("Eliminazione del post " + req.params.id);
};

module.exports = { index, show, store, update, modify, destroy };
// esporto le funzioni

