const express = require('express')
const app = express()
const port = 3000
const posts = require('./routers/posts')

// comando per leggere il body json 
app.use(express.json());

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('<h1>Lista di cibo vario</h1>')
})

// Collego il router dei posts
app.use('/posts', posts)