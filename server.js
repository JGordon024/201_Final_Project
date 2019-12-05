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
    const planetNames = await fetch("https://swapi.co/api/planets") 
    const json = planetNames.json

    fetch(`https://swapi.co/api/${req.params.name}`)
    .then(res => res.json())
    .then(
        data => {
            res.render('index',{
                planet: data.results[1].name
            })
            console.log(data.results[1].name)
        }
    )
})

// app.use('planets', async (req, res)=>{
//     try{
//     something = await fetch(`https://swapi.co/api/planets/${req.params.name}`)
//     // .then(res =>res.json)
//     // .then(data=>)
//     const _json = await _res.json()
//     console.log(_json)
//     } catch(error){
// console.log(error)
//     }
// })
app.listen(port, ()=>console.log(`Server is ${port}`))