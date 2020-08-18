var cards = document.querySelectorAll('.cards');

cards.forEach(card => {
 card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
})

const getPoki = () => {

    fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
        .then(resp => resp.json())
        .then(data => {

            const poki = data.results;

            console.log(pokiS)

            const myPokisArray = poki.map((ipoki, idx) => {
                console.log(idx)
                return {
                    name: ipoki.name,
                    id: idx,
                }
            }
        )
            var cardcontainer = document.getElementById("cardcontainer")
            myPokisArray.forEach(Ele => {
//                 <div class="card">
//     <img src="img_avatar.png" alt="Avatar" style="width:100%">
//     <div class="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//     </div>
// </div>
            // cardcontainer.appendChild(document.createElement("div"). appendChild(document.createTextNode(Ele.name)))
            var carddiv = document.createElement("div")
            carddiv.className = "flipcard c"
            var carimg = document.createElement("img")
            carimg.src = "placeholder.jpg"
            carddiv.appendChild (carimg)

            var innerdiv = document.createElement("div")
            innerdiv.className = "container"
            var nameheader = document.createElement("h4")
            nameheader.appendChild(document.createTextNode(Ele.name))
            innerdiv.appendChild(nameheader)
            carddiv.appendChild(innerdiv)
            cardcontainer.appendChild(carddiv)
            carddiv.addEventListener( 'click', function() {
                carddiv.classList.toggle('is-flipped');
              });

            })
            console.log(myPokisArray)

        })
    }

    getPoki();

//     const charForm = document.querySelector('#charform');
//     // charForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const formData = new FormData(charform);

//         let charObj = new Object();

//         for(let pair of FormData.entries()) {
//             console.log(pair)

//             charObj[pair[0]] = pair[1]

//             // newCharHTML = 
//             //     <div class='card'>
//             //         <div class='card__face card__face--front'>${charObj.name}</div>
//             //         </div>

// const parentdiv = document.createElement('div');
// parentDiv.className('scene')

//                     container.append(newCharHTML)

//                 }}