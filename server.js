const express = require('express')
const router = express.Router()
const nomes = require('./dados.json')

const app = express()
app.use(express.json())

const ola = router.get('/ola', (req, res) => {
    res.send('Olá aprofunda pretalab')
})

const alunas = router.get('/nomes', (req, res) => {
    res.send('nomes')
})

    app.use(ola)
    app.use(alunas)
    app.listen(3333, console.log('Servidor rodando com sucesso'))

