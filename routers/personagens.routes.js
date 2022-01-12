const express = require('express');
const router = express.Router();

let personagens = [{
    nome: "Gumball Watterson",
    idade: 12,
    tipo: "Gato"
},
{
    nome: "Carrie Krueger",
    idade: "?",
    tipo: "Fantasma" 
},
{
    nome: "Darwin Watterson",
    idade: 10,
    tipo: "Peixe" 
}]

router.get('/', (req, res) => {
    res.status(200).json(personagens);
});

router.get('/:id', (req, res) => {
    const id = req.params.id -1;
    const personagem = personagens[id];
    res.status(200).json(personagem);
})

router.post('/', (req, res) => {
    const personagem = req.body;
    personagens.push(personagem);
    res.status(201).json('Personagem cadastrado com sucesso!')
})

router.put('/:id', (req, res) => {
    const id = req.params.id -1;
    const personagem = req.body;
    personagens[id] = personagem
    res.status(200).json('Personagem alterado com sucesso!');
})

router.delete('/:id', (req, res) => {
    const id = req.params.id -1;
    delete personagens[id];

    res.status(200).json('Personagem excluído com sucesso!')
})

module.exports = router;