var cards = document.querySelectorAll('.card');

cards.forEach(card => {
card.addEventListener( 'click', function() {
card.classList.toggle("is-flipped");
});
})

const getPoki = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
        .then(resp => resp.json())
        .then(data => {

            const poki = data.results

            const myPokiArraypokis = pokis.map(pokis => (
            {

            }
            ))
        })

getPoki();