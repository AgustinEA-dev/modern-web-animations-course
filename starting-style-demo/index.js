const rectangle = document.querySelector(".rectangle")
const toggleButton = document.querySelector(".toggle-color")

toggleButton.addEventListener("click", () => {
    rectangle.classList.toggle("rectangle-gold")
})

const rectangle1 = document.querySelector(".rectangle-1")
const showPopUpButton = document.querySelector(".show-pop-up")
const hidePopUpButton = document.querySelector(".hide-pop-up")

showPopUpButton.addEventListener("click", () => {
    rectangle1.classList.add("rectangle-1-visible")
})

hidePopUpButton.addEventListener("click", () => {
    rectangle1.classList.remove("rectangle-1-visible")
})

const rectangle2 = document.querySelector(".rectangle-2")
const fadeOutButton = document.querySelector(".fade")

fadeOutButton.addEventListener("click", () => {
    rectangle2.classList.toggle("rectangle-2-fade")
})

const rectangle3 = document.querySelector(".rectangle-3")
const slideOutButton = document.querySelector(".slide")

slideOutButton.addEventListener("click", () => {
    rectangle3.classList.toggle("rectangle-3-slide")
})