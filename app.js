const btn = document.querySelector(".btn")
const city = document.querySelector(".city")

function showArrow(){
    if (city.hidden) {
        city.hidden = false
        document.querySelector(".img").style = `background-image: url(./assets/Chevron1.svg)`
    }
    else {
        city.hidden = true
        document.querySelector(".img").style = `background-image: url(./assets/Chevron.svg)`
    } 
}

btn.addEventListener("click", () => {
    showArrow()
})

city.addEventListener("click", event => {
    document.querySelector(".btn p").textContent = event.target.textContent
    showArrow()
})
