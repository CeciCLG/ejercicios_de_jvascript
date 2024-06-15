async function getCharacters() {
    let res = await fetch('https://rickandmortyapi.com/api/character');
    let characters = await res.json();
    console.log(characters);
}

getCharacters();