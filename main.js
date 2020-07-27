import {starships} from './starships.js';
import {planets} from './planets.js';

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

    genderToggleBtn.addEventListener('click',() => {
        isStarship = !isStarship;
        ul.innerHTML = '';
    }