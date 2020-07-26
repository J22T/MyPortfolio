import { starships } from  './starships.js'
console.log(starships)

function createNode(element) {

    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 

let titles;

fetch(swurl)
    .then(resp => resp.json())
    .then(data => {
        titles = data.results;

        console.log(titles)
    })