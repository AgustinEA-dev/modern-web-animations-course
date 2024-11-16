//Animated squares.

const puaseButton = document.querySelector(".pause")
const square = document.querySelectorAll(".square")

puaseButton.addEventListener("click", () => {
    square.forEach((square) => square.classList.toggle("paused"))
    console.log("clicked")
})

//Color board.

const boardContainer = document.querySelector(".color-board")

for (let i = 0; i < 21; i++) {
    const boardSquare = document.createElement("div")
    boardSquare.classList.add("board-square")
    boardContainer.appendChild(boardSquare)
    console.log(boardSquare)

}