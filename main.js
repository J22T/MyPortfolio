var cards = document.querySelectorAll('.card');

cards.forEach(card => {
card.addEventListener( 'click', function() {
card.classList.toggle("is-flipped");
});
})

const getPoki = () => {

    fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100') // Call the fetch function passing the url of the API as a parameter
        .then((resp => resp.json()) // Transform the data into json
        .then(function(data) {
            // Your code for handling the data you get from the API
        })
    })
        .catch(function(error) {
            // This is where you run code if the server returns any errors
        });











function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('poki'); // Get the list where we will place our authors
const url = 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100'; // Get 100 random pokemon bro
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let poki = data.results;
  return poki.map(function(poki) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${poki.name.first} ${poki.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   
