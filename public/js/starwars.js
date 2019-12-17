// Star Wars API

// Characters
const charSubmit = document.querySelector('.charSubmit');

function charClickHandler(){ 
    let charFetchName = document.querySelector('.charInput').value;
    window.location = `/starwars/characters/${charFetchName}`
}

charSubmit.addEventListener('click', charClickHandler, false);

// Planets
const planetSubmit = document.querySelector('.planetSubmit');

function planetClickHandler(){ 
    let planetFetchName = document.querySelector('.planetInput').value;
    window.location = `/starwars/planets/${planetFetchName}`
}

planetSubmit.addEventListener('click', planetClickHandler, false);
