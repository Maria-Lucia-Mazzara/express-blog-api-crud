const express = require('express')
const app = express()
const port = 3000
const posts = require('./routers/posts')
const notFound = require('./middlewares/notFound')
const erroreMio = require('./middlewares/erroreMio')

// comando per leggere il body json 
app.use(express.json());

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
    // // lollo l'ho generato io per far apparire l'errore
    // lollo
    res.send('<h1>Lista di cibo vario</h1>')
})


// Collego il router dei posts
app.use('/posts', posts)

// errore fatto da me
app.use(erroreMio)

// inserisco l'errore utente 
app.use(notFound)


// Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.

// Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
// Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.
// >