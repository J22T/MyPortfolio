var cards = document.querySelectorAll('.cards');

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
            return document.createElement(element); // Create the type of element you pass in the parameters
          }
        
          function append(parent, el) {
            return parent.appendChild(el); // Append the second parameter(element) to the first one
          }