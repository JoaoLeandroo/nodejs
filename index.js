const express = require('express');

const server = express();

// localhost:3000/curso
server.get('/curso', (req, res) => {
    // o "req" representa os dados da aplicação
    // o "res" representa as repostas pro front-end

    
    // console.log("Entrei na rota.")

    // return res.send("Hello World!")

    return res.json({ 
        "drops": [
            {
                "id": 1,
                "name": "Axe of Raah",
                "monsters": ["Sikuku Elite Fighter", "Venerable Snapper"]
            },
            {
                "id": 2,
                "name": "Black Monster Axe",
                "monsters": ["Ramesses Robo Guard", "Nakhtmin Zoombi Guard", "Poisontail Scorpio King", "Prehistoric Mastyx King", "Fearsome Terrasaurus King"]
            },
            {
                "id": 3,
                "name": "Blade Hunter Sword",
                "monsters": ["Nakhtmin Zoombi Guard", "Giant Fiery Snapper", "Poisontail Scorpio King", "Prehistoric Mastyx King", "Fearsome Terrasaurus King"]
            },
            {
                "id": 4,
                "name": "Bloom Wand",
                "monsters": ["Item Removido do Jogo. :("]
            },
            {
                "id": 5,
                "name": "Blue Iron Bow",
                "monsters": ["Saboten", "Rakapuska", "Poisontail Scorpio King", "Prehistoric Mastyx King", "Fearsome Terrasaurus King"]
            },
            {
                "id": 6,
                "name": "Chimp Napsack(Backpack)",
                "monsters": ["Doonga Leader"]
            },
            {
                "id": 7,
                "name": "Crescent Moon",
                "monsters": ["Cursed Ant Vagabond"]
            },
            {
                "id": 8,
                "name": "Cross Bones",
                "monsters": ["Cursed Ant Vagabond"]
            },
            {
                "id": 9,
                "name": "Dual Samurai",
                "monsters": ["Ramesses Robo Hunter", "Nakhtmin Zoombi Hunter"]
            },
            {
                "id": 10,
                "name": "Emperor Plate Mail",
                "monsters": ["Saboten", "Nakhtmin Zoombi Hunte"]
            }
        ]
    })



})

// porta 3000
server.listen('3000')