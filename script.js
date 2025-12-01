// function manageResponse(response) {
//     const jsonResult = response.json();
//     return jsonResult;
// }
// function manageResult(result) {
//     console.log(result);
// }

// fetch('./assets/data.json').then(manageResponse).then(manageResult);

fetch('./assets/data.json')
.then(res => res.json())
.then(dataCallback)
.catch(err => console.error(err));


// fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
// .then(res => res.json())
// .then(result => console.log(result))
// .catch(err => console.error(err));

function dataCallback(data) {
    console.log(data);


const bookCont = document.getElementById('book-container');

for (const book of data) {
    console.log(book.title+ ' '+ book.author);
    bookCont.innerHTML += '<p> Titolo: ' + book.title + ' - Autore: ' + book.author + '</p>';
    }
}

fetch('https://pokeapi.co/api/v2/pokemon')
.then(res => res.json())
.then(pokemonCallback)
.catch(err => console.error(err));

function pokemonCallback(data) {
    const pokemons = data.results;
    const pokeCont = document.getElementById('pokemons-container');

    for (const pokemon of pokemons) {
        const pokeP = document.createElement('p');
        pokeP.appendChild(document.createTextNode(pokemon.name.toUpperCase()));
        pokeCont.appendChild(pokeP);
    }
    console.log(pokemons);
}