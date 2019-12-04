const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path')
const router = express.Router
const port=3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static("public"))

app.get('',(req,res)=>{
    fetch('https://swapi.co/api/planets')
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

app.listen(port, ()=>console.log(`Server is ${port}`))