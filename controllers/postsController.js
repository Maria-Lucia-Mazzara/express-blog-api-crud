
// raccoglie tutta la lista
function index(req, res) {
    res.send("Lista dei post");
}

// risposta con i dettagli richiesti
function show(req, res) {
    res.send("Dettagli del post " + req.params.id);
}

