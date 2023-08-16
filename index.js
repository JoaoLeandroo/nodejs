const express = require('express');

const server = express();


// Query params = ?nome=NodeJs
// Route params = /curso/2
// Request Body = { nome: 'Node Js', tipo: 'Backend' }


// localhost:3000/curso
server.get('/curso', (req, res) => {
    // o "req" representa os dados da aplicação
    // o "res" representa as repostas pro front-end

    // http://localhost:3000/curso?nome=NodeJs
    const nome = req.query.nome

    return res.json({ curso: `Apredendo ${nome}` })
    

    // console.log("Entrei na rota.")
    // return res.send("Hello World!")
    // return res.json({ 
    //     "drops": [
    //         {
    //             "id": 1,
    //             "name": "Axe of Raah",
    //             "monsters": ["Sikuku Elite Fighter", "Venerable Snapper"]
    //         },
    //         {
    //             "id": 2,
    //             "name": "Black Monster Axe",
    //             "monsters": ["Ramesses Robo Guard", "Nakhtmin Zoombi Guard", "Poisontail Scorpio King", "Prehistoric Mastyx King", "Fearsome Terrasaurus King"]
    //         },
    //         {
    //             "id": 3,
    //             "name": "Blade Hunter Sword",
    //             "monsters": ["Nakhtmin Zoombi Guard", "Giant Fiery Snapper", "Poisontail Scorpio King", "Prehistoric Mastyx King", "Fearsome Terrasaurus King"]
    //         }
    //     ]
    // })



})

// porta 3000
server.listen('3000')