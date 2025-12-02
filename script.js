// function manageResponse(response) {
//     const jsonResult = response.json();
//     return jsonResult;
// }
// function manageResult(result) {
//     console.log(result);
// }

// fetch('./assets/data.json').then(manageResponse).then(manageResult);

// fetch('./assets/data.json')
// .then(res => res.json())
// .then(dataCallback)
// .catch(err => console.error(err));

// function dataCallback(data) {
//     console.log(data);


// const bookCont = document.getElementById('book-container');

// for (const book of data) {
//     console.log(book.title+ ' '+ book.author);
//     bookCont.innerHTML += '<p> Titolo: ' + book.title + ' - Autore: ' + book.author + '</p>';
//     }
// }

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(res => res.json())
// .then(pokemonCallback)
// .catch(err => console.error(err));

// function pokemonCallback(data) {
//     const pokemons = data.results;
//     const pokeCont = document.getElementById('pokemons-container');

//     for (const pokemon of pokemons) {
//         const pokeP = document.createElement('p');
//         pokeP.appendChild(document.createTextNode(pokemon.name.toUpperCase()));
//         pokeCont.appendChild(pokeP);
//     }
//     console.log(pokemons);
// }


fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
.then(res => res.json())
.then(yugiOhCallback)
.catch(err => console.error(err));

function yugiOhCallback(result) {
    const cards = result.data;
    const yugiOhCont = document.getElementById('yugiOh-cards');

    for (const card of cards) {

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('flip-card');

        const flipInner = document.createElement('div');
        flipInner.classList.add('flip-inner');

        const flipFront = document.createElement('div');
        flipFront.classList.add('flip-front');

        const cardImg = document.createElement('img');
        cardImg.classList.add('yugiOh-card-img');
        cardImg.src = card.card_images[0].image_url;
        flipFront.appendChild(cardImg);

        const flipBack = document.createElement('div');
        flipBack.classList.add('flip-back')

        const cardName = document.createElement('h3');
        cardName.appendChild(document.createTextNode(card.name));
        flipBack.appendChild(cardName);

        const cardType = document.createElement('p');
        cardType.appendChild(document.createTextNode('Tipo: ' + card.type));
        flipBack.appendChild(cardType);
        
        const cardReadableType = document.createElement('p');
        cardReadableType.appendChild(document.createTextNode('Sottotipo: ' + card.humanReadableCardType));
        flipBack.appendChild(cardReadableType);

        if (card.card_sets) {
        const cardSetName = document.createElement('p');
        cardSetName.appendChild(document.createTextNode('Nome del set: ' + card.card_sets[0].set_name));
        flipBack.appendChild(cardSetName);

        const cardSetCode = document.createElement('p');
        cardSetCode .appendChild(document.createTextNode('Codice del set: ' + card.card_sets[0].set_code));
        flipBack.appendChild(cardSetCode);

        const cardRarity = document.createElement('p');
        cardRarity.appendChild(document.createTextNode('Rarità: ' + card.card_sets[0].set_rarity + " " + card.card_sets[0].set_rarity_code));
        flipBack.appendChild(cardRarity);
        }

        if (card.archetype) {
        const cardFrameType = document.createElement('p');
        cardFrameType.appendChild(document.createTextNode('Arche tipo: ' + card.archetype));
        flipBack.appendChild(cardFrameType);
        }
        
        const cardPrices = document.createElement('p');
        cardPrices.innerHTML = '<u><b>Prezzi </b></u><br>' +
        'Cardmarket: $' + card.card_prices[0].cardmarket_price + '<br>' +
        'Tcgplayer: $' + card.card_prices[0].tcgplayer_price + '<br>' +
        'Ebay: $' + card.card_prices[0].ebay_price + '<br>' +
        'Amazon: $' + card.card_prices[0].amazon_price + '<br>' +
        'CoolStuffInc: $' + card.card_prices[0].coolstuffinc_price;
        flipBack.appendChild(cardPrices);
        

        flipInner.appendChild(flipFront);
        flipInner.appendChild(flipBack);
        cardDiv.appendChild(flipInner);
        yugiOhCont.appendChild(cardDiv);
    } 
}



    