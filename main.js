function createNode(element) {
    return document.createdElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://swapi.dev/api/starships/9/';

let starships;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        starships = data.results;

        console.log(authors)

        let li = createNode('li')
            img = createNode('img'),
            span = createNode('span');

            img.src = spaceships[0]
    })