const express = require('express')
const app = express()
const port = 3000
const posts = require('./routers/posts')
const notFound = require('./middlewares/notFound')
const errorsHandler = require('./middlewares/errorsHandler')

// comando per leggere il body json 
app.use(express.json());

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
    // // lollo l'ho generato io per far apparire l'errore
    lollo
    res.send('<h1>Lista di cibo vario</h1>')
})


// Collego il router dei posts
app.use('/posts', posts)

// errore fatto da me
app.use(errorsHandler)

// inserisco l'errore utente 
app.use(notFound)




