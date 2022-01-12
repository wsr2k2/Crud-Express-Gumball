const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json("API O INCRIVEL MUNDO DE GUMBALL!")
})

const personagensRouter = require('./routers/personagens.routes');
app.use('/personagens', personagensRouter);

app.listen(port);
console.log(`Aplicação rodando em: http://localhost:${port}`);