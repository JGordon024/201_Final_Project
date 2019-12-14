//Pokemon page
const pokeSubmit = document.querySelector('.pokeSubmit');

function pokeClickHandler(){ 
    let pokeFetchName = document.querySelector('.pokemonInput').value;
    window.location = `/poke/${pokeFetchName}`
}

pokeSubmit.addEventListener('click', pokeClickHandler, false);

