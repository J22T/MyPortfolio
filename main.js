// import {createAuthor,createNode,append,} from './functions.js';

import {planets} from './planets.js'
import {starships} from './starships.js'

console.log(planets);

//get a pointer to the div with an id of planets in the HTML file
const planetsDiv = document.querySelector('#planets');

// take the planets array and run a function for each item in the array
planets.map(function planetsFunc(planet){

    //for each planet, create a div element
    const div = document.createElement('div');
    const p = document.createElement('p');

    //add a class name for the divs
    div.className = 'planet' 

    //then, take the name and put it inside the div
    //<div>alderan</div>
    // div.innerHTML = planet.name;
    p.innerHTML = planet.name;
    // div.innerHTML = `Planet name ${planet.name} Planet size: ${planet.diameter}`;

    div.appendChild(p);
    //Attach the div with the planet to the HTML
    planetsDiv.appendChild(div);
})





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