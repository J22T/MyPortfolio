import {starships} from './starships.js';
import {planets} from './planets.js';

films.map()

function createAuthor(author){
    let li = createNode('li'),
    img = createNode('img'),
    span = createNode('span');

    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;

    append(li, img);
    append(li, span);
    append(ul, li);
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

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
    }