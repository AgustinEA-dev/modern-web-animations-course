//Animated squares/Keyframes

const puaseButton = document.querySelector(".pause")
const square = document.querySelectorAll(".square")

puaseButton.addEventListener("click", () => {
    square.forEach((square) => square.classList.toggle("paused"))
})

//Color board/EventDelegation

const boardContainer = document.querySelector(".color-board")
const resetBoardButton = document.querySelector(".reset-button")

for (let i = 0; i < 21; i++) {
    const boardSquare = document.createElement("div")
    boardSquare.classList.add("board-square")
    boardContainer.appendChild(boardSquare)
}

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })
}

addGlobalEventListener("click", ".board-square", (e) => {
    e.target.classList.toggle("board-square-flip")
})

resetBoardButton.addEventListener("click", () => {
    const allSquares = document.querySelectorAll(".board-square")
    allSquares.forEach(square => square.classList.remove("board-square-flip"))
})



