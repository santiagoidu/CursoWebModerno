const porta = 3003

const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParse.urlencoded({extended: true}))

app.get('/produto', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produto/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.delete('./produto/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})


app.post('./produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})