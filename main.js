// import {createAuthor,createNode,append,} from './functions.js';

import {planets} from './planets.js'
import {starships} from './starships.js'





console.log(starships);

const planetsDiv = document.querySelector('#starships');

starships.map(function starshipsFunc(starship){

const div = document.createElement('div');
const p = document.createElement('p');

div.className = 'starship'

p.innerHTML = starship.name;

div.appendChild(p);

starshipDiv.appendChild(div);





}



// .map()

// const url = starships.js;
// const ul = document.getElementById('authors');
// const starshipsToggleBtn = document.getElementById('toggleGender');
// let isMale = true;

// let starships;

// fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//         authors = data.results;
//         console.log(authors)

//         authors.map(author => {
//             createAuthor(author)
//         })
//     })

//     starshipToggleBtn.addEventListener('click',() => {
//         isStarship = !isStarship;
//         ul.innerHTML = '';
//     }

//     starship.filters(author => {
//         return isStarship ? author.gender == 'male' : author.starship == ''
//     }