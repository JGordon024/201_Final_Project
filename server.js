const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path')
const router = express.Router
const port=3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static("public"))

app.get('', async (req,res)=>{
    // const planetNames = fetch("https://swapi.co/api/planets") 
    // const json = planetNames.json


            res.render('index',{
                SWTitle: 'Star Wars API',
                PokeTitle: 'Pokemon API',
                RickTitle: 'Rock and Morty API'
            })
         
})
app.get('/starwars', (req,res)=>{
    res.render('starwars',{
        characters: "Characters",
        vehicles: "Vehicles",
        planets: "Planets"
    })
})

app.get('/star_wars/characters',(req,res)=>{
    res.render('star_wars/characters', {
        vader: "Darth Vader",
        luke: "Luke Skywalker",
        obi: "Obi-wan Kenobi"
    })
})

app.get('starwars/DarthVader', (req, res)=>{
    
    fetch("https://swapi.co/api/people")
    .then(res => res.json())
    .then(
        data => {
            // Quick way reuse data.results[3] for each variable
            const character = data.results[3]
            res.render('/starwars/characters/vader',{
                name: character.name,
                age: character.age
            })
            console.log(character.name)
        }
    )
})
app.listen(port, ()=>console.log(`Server is ${port}`))