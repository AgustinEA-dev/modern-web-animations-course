const puaseButton = document.querySelector(".pause")
const square = document.querySelectorAll(".square")

document.addEventListener("click", () => {
    square.forEach((square) => square.classList.toggle("paused"))
    console.log("clicked")
})