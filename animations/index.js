
//Color Board/EventDelegation

const boardContainer = document.querySelector(".color-board")
const resetBoardButton = document.querySelector(".reset-button")

for (let i = 0; i < 16; i++) {
    const boardSquare = document.createElement("div")
    boardSquare.classList.add("board-square")
    boardContainer.appendChild(boardSquare)
}

// Event Delegation function ------------------------------------>

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })
}

addGlobalEventListener("click", ".board-square", (e) => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const newColor = `rgb(${r},${g},${b})`
    e.target.classList.add("board-square-flip")
    e.target.style.backgroundColor = newColor
})

// ------------------------------------------------------------->

resetBoardButton.addEventListener("click", () => {
    const allSquares = document.querySelectorAll(".board-square")
    allSquares.forEach(square => {
        square.classList.remove("board-square-flip")
        square.style.backgroundColor = "var(--background-color4)"
    })
})

//Animated Squares/Keyframes

const playButton = document.querySelector(".play-button")
const square = document.querySelectorAll(".square")

playButton.addEventListener("click", () => {
    square.forEach((square) => {
        square.classList.toggle("running")
        if (square.classList.contains("running")) {
            playButton.innerText = "PAUSE ANIMATION"
        } else playButton.innerText = "START ANIMATION"
    })
})