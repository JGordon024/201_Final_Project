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
//Gets Luke Skywalker's page and renders the data onto it
app.get('/star_wars/characters/luke', (req, res)=>{
    
    fetch("https://swapi.co/api/people")
    .then(res => res.json())
    .then(
        data => {
            // Quick way reuse data.results[3] for each variable
            const character = data.results[0]
            res.render('star_wars/characters/luke',{
                name: character.name,
                age: character.age,
                height: character.height
            })
            console.log(character.name)
        }
    )
})

app.get('/poke/:name', async (req, res) => {
    console.log("name");
    try {

        const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.name}`;
        const pokemonData = await fetch(URI);
        const json = await pokemonData.json();
        // console.log(json);
        const pokeName = json.name;
        const {...sprites} = json.sprites
        // console.log(pokeImg);
    
        await res.render('poke', {
            name: pokeName,
            img: sprites.front_default,
            weight: json.weight,
            height: json.height,
        });
    } catch (error) {
        console.log(error);
    } 	
});

app.get('/rm/:character', async (req, res) => {
    console.log("Rick and Morty")
    try {
        const URI = `https://rickandmortyapi.com/api/character/${req.params.id}`;
        const rmData = await fetch(URI);
        const json = await rmData.json();
        // console.log(json);
        const rmName = await json.results.name;
        // const pokeImg = await json.sprites.back_default;
        // console.log(pokeImg);
    console.log(rmName)
        await res.render('rick', {
            name: rmName,
            // img: pokeImg
        });
    } catch (error) {
        console.log(error);
    } 	
});




app.listen(port, ()=>console.log(`Server is ${port}`));