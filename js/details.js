//Hjælper med at hente parametre fra URLen
const params = new URLSearchParams(document.location.search)
const id = params.get("id")

fetch(`./data/${id}.json`)
    .then(response => response.json())
    .then((data) => {
        // console.log(data)

        document.querySelector("body").innerHTML += `

        <div class="fave">
        <p>Favourite</p>
        <i class="fa-regular fa-heart"></i>
        </div>

        <div class="destination-wrapper">
        <img src="/img/${data.image}" alt="">
        
        <section class="des-info">
        <h2>${data.destination}</h2>
        <h3 class="title">${data.title}</h3>
        <h3 class="subtitle">${data.subtitle}</h3>
        <p class="basic-info">${data.text}</p>
        <h3 class="list-headline">Facilities</h3>
        <ul class="facilities">
            <li>${data.facilities[0]}</li>
            <li>${data.facilities[1]}</li>
            <li>${data.facilities[2]}</li>
            <li>${data.facilities[3]}</li>
        </ul>
    </section>
    </div>
        
        `

    })

   