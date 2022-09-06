const express = require('express')
const app = express()
app.use(express.json())

const observacoes = {}
let contador = 0

//localhost:5000/lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {

})

//localhost:5000/lembretes/abcde/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {

})

app.listen(5000, () => console.log('Observação, Porta 5000'))