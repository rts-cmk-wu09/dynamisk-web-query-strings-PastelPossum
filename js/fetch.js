// resource representerer data man gerne vil hente - altså i dette tilfælde vores json fil
// Man kan lave objektet om til en streng/string med stringifier (Men ikke i denne opgave)
// Som udganspunkt - default metode er GET 
// Fetch retunerer et promise. Man bruger en promise handler metode til at arbejde med den. I denne opgave bruger vi .then()

const destinationCards = document.querySelector(".cards")
// console.log(document.querySelector(".cards"))

// Henter destination json filen - request - får et response tilbage
//Vi skal konvertere vores response til noget vi kender (json i denne situation)
fetch("./data/destinations.json")
    .then((response) => response.json())
    //Der bliver herved sendt et nyt promise som vi kan fange hernede
    .then((data) => {
    //Man kan tjekke om man har fået fat i den rigtige data ved at bruge en console log
    // console.log(data);
    
        data.destinations.forEach((destination) => {

            destinationCards.innerHTML += `
            
        <div class="apartment-card" id="${destination.id}">
        <img src="./img/${destination.image}" alt="">
        <section class="card-menu">
        <i class="fa-regular fa-heart"${localStorage.getItem(destination.id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
        <p><a href="destination.html?id=${destination.id}">More</a></p>
        </section>
        </div>
            
            `;

        });

    });

    // ? - if 
    // : - else
    