import {createAuthor,createNode,append,} from './functions.js';

films.map()



const url = starships.js;
const ul = document.getElementById('authors');
const starshipsToggleBtn = document.getElementById('toggleGender');
let isMale = true;

let starships;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        authors = data.results;
        console.log(authors)

        authors.map(author => {
            createAuthor(author)
        })
    })

    starshipToggleBtn.addEventListener('click',() => {
        isStarship = !isStarship;
        ul.innerHTML = '';
    }

    starship.filters(author => {
        return isStarship ? author.gender == 'male' : author.starship == ''
    }