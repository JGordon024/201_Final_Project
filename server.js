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
            res.render('index',{
                SWTitle: 'Star Wars API',
                PokeTitle: 'Pokemon API',
                RickTitle: 'Rick and Morty API'
            })
         
})
app.get('/starwars', (req,res)=>{
    res.render('starwars',{
        characters: "Characters",
        vehicles: "Vehicles",
        planets: "Planets"
    })
})
//  
app.get('/characters/:id', async (req, res) => {
    try {
        const URI = `https://swapi.co/api/people/1`;
        const charData = await fetch(URI);
        const json = await charData.json();
        const charName = json.name;  
        await res.render('characters', {
            name: charName
        });
    } catch (error) {
        console.log(error);
    } 	
});
// Put in a pokemon name and it gives you the image, as well as some other basic information.
app.get('/poke/:name', async (req, res) => {
    try {

        const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.name}`;
        const pokemonData = await fetch(URI);
        const json = await pokemonData.json();
        const pokeName = json.name;
        const {...sprites} = json.sprites
        // const abilities = json.abilities.foreach(function(ability){console.log(ability.name)})
        console.log(sprites.front_default)
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
// Input a numeric value for the ID to get the character in the JSON. Gives basic data
app.get('/rm/:id', async (req, res) => {
    console.log("Rick and Morty")
    try {
        const URI = `https://rickandmortyapi.com/api/character/${req.params.id}`;
        const rmData = await fetch(URI);
        const json = await rmData.json();
        const rmName =  json.name;
        const rickImg =  json.image
        const gender = json.gender
        const origin = json.origin.name
        const species = json.species
        console.log(origin);
        await res.render('rick', {
            name: rmName,
            img: rickImg,
            gender: gender,
            species: species,
            origin: origin
        });
    } catch (error) {
        console.log(error);
    } 	
});




app.listen(port, ()=>console.log(`Server is ${port}`));