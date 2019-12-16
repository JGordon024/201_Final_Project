// Star Wars API

// Characters
const charSubmit = document.querySelector('.charSubmit');

function charClickHandler(){ 
    let charFetchName = document.querySelector('.charInput').value;
    window.location = `/starwars/characters/${charFetchName}`
}

charSubmit.addEventListener('click', charClickHandler, false);