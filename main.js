import { starships } from  './starships.js'
console.log(starships)

starships.map(starships => {
    console.log(starships.episode_id)
})

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

        titles.map()

        console.log(titles)
        let li = createNode('li'),
            img = createNode('img'),
            span = craeteNode('span');

            img.src = titles (0).picture.medium
    })