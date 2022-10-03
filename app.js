const btn = document.querySelector(".btn")
const city = document.querySelector(".city")

btn.addEventListener("click", () => {
    if (city.hidden) {
        city.hidden = false
        document.querySelector(".img").style = `background-image: url(./assets/Chevron1.svg)`
    }
    else {
        city.hidden = true
        document.querySelector(".img").style = `background-image: url(./assets/Chevron.svg)`
    } 
})

