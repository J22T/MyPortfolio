var cards = document.querySelectorAll('.cards');

cards.forEach(card => {
 card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
})

const getPoki = () => {

    fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
        .then((resp => resp.json())
        .then(data => {

            const poki = data.results;

            const myPokisArray = poki.ap((person, idx => {
                console.log(idx)
                return {
                    name: poki.name,
                    id: idx
                }
            }
            ))

            console.log(myPokisArray)

        }))
    }

    getPoki();