//Pokemon page
const pokeSubmit = document.querySelector('.pokeSubmit');

function pokeClickHandler(){ 
    let pokeFetchName = document.querySelector('.pokemonInput').value;
    window.location = `/poke/${pokeFetchName}`
}

pokeSubmit.addEventListener('click', pokeClickHandler, false);

//Rick and Morty page
const rickSubmit = document.querySelector('.rickSubmit');

function rickClickHandler(){ 
    let rickFetchName = document.querySelector('.rickInput').value;
    window.location = `/rm/${rickFetchName}`
}

rickSubmit.addEventListener('click', rickClickHandler, false);

