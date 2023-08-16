const express = require('express');

const server = express();

// localhost:3000/curso
server.get('/curso', (req, res) => {
    // o "req" representa os dados da aplicação
    // o "res" representa as repostas pro front-end

    
    // console.log("Entrei na rota.")

    // return res.send("Hello World!")

    return res.json({ dados: 'dados da aplicação' })



})

// porta 3000
server.listen('3000')