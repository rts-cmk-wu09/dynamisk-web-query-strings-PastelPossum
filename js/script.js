document.querySelector(".cards").addEventListener("click", (e) => {
    
    if (e.target.classList.contains("fa-heart")){
        
        let destinationsId = e.target.closest("div").attributes.id.value

    if(!localStorage.getItem(destinationsId, destinationsId)) {

        localStorage.setItem(destinationsId, destinationsId)

        e.target.classList.add("fa-solid")

     } else {

        localStorage.removeItem(destinationsId)

        e.target.classList.remove("fa-solid")
        e.target.classList.add("fa-regular")

    }

   }

});