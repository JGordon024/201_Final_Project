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

app.get('/starwars', (req, res)=>{
    fetch("https://swapi.co/api/people")
    .then(res => res.json())
    .then(
        data => {
            res.render('starwars',{
                planet: data.results[1].name
            })
            console.log(data.results[1].name)
        }
    )
})
app.listen(port, ()=>console.log(`Server is ${port}`))