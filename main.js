function createNode(element) {
    return document.createdElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://swapi.dev/api/starships/9/';
const swurl = 'https://swapi.dev/api/starships/9/'

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })