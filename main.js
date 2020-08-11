import {films, starships} from './starships.js'


starships.map()

function createSpaceship(spaceship){
let li = createNode('li')
img = createNode('img'),
span = createNode('span');

img.src = spaceship.picture.medium;
span.innerHTML = `${spaceship.name.first} ${spaceship.name.last}` ;


append(li, img);
append(li, span);
append(ul, li);
}

function createNode(element) {
    return document.createdElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://swapi.dev/api/starships/9/';
const ul = document.getElementById('spaceshipsandplanets')
const genderToggleBtn = document.getElementById(toggleSpaceship)
let isGravity = true;

let spaceshipsandplanets;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        starships = data.results;
        spaceshipsandplanets = data.results;
        console.log(spaceshipsandplanets)

        spaceship.map(spaceship => {
      
            createSpaceship(spaceship)
        })
    })

    spaceshipsandplanets.map(spaceshipsandplanets => {
        console.log(spaceshipsandplanets.cell)
        
        })
    })

    spaceshipsToggleBtn.addEventListener('click', () => {
        isgravity = !isGravity:
        ul.innerHTML = '';

        spaceshipsandplanets.filter(spaceshipsandplanets => {
            return isGravity ? spaceshipsandplanets.gravity == 'gravity' : spaceships.planets == 'gravity'
    })
    .map(spaceship => {

        createSpaceship(spaceship);

        })
    })