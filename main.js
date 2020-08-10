function createNode(element) {
    return document.createdElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://swapi.dev/api/starships/9/';
const ul = document.getElementById('spaceshipsandplanets')
const genderToggleBtn = document.getElementById(toggleSpaceship)

let spaceshipsandplanets;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        starships = data.results;
        spaceshipsandplanets = data.results;
        console.log(spaceshipsandplanets)

    spaceshipsandplanets.map(spaceshipsandplanets => {
        console.log(spaceshipsandplanets.cell)
        let li = createNode('li')
            img = createNode('img'),
            span = createNode('span');

            img.src = spaceship.picture.medium;
            span.innerHTML = `${spaceship.name.first} ${spaceship.name.last}` ;
            
    
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })

    spaceshipsandplanetsToggleBtn.addEventlistener('click', () => {
        spaceshipsandplanets.filter('clicked')
    })