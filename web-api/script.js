//Three ways to define Keyframes

document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector(".square");
    const element1 = document.querySelector(".square1")
    const element2 = document.querySelector(".background")
    const element3 = document.querySelectorAll(".line")
    const buttons = document.querySelectorAll(".button")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("play")) {
                squareAnimation.play()
                squareAnimation1.play()
            }
            if (button.classList.contains("pause")) {
                squareAnimation.pause()
                squareAnimation1.pause()
            }
            if (button.classList.contains("cancel")) {
                squareAnimation.cancel()
                squareAnimation1.cancel()
            }
            if (button.classList.contains("reverse")) {
                squareAnimation.reverse()
                squareAnimation1.reverse()
            }
            if (button.classList.contains("finish")) {
                if (squareAnimation.iterations === Infinity) {
                    alert("Imposible to finish an infinite animation!!!")
                }
                squareAnimation.finish()
                squareAnimation1.finish()
            }
        })
    })

    const playbackRateInput = document.getElementById("playbackRateInput")
    const playbackRateInputValue = document.getElementById("playbackRateInputValue")

    playbackRateInput.addEventListener("input", (e) => {
        squareAnimation.updatePlaybackRate(e.target.value)
        playbackRateInputValue.value = e.target.value
    })

    const squareAnimation = element.animate({
        transform: ["translateX(0)", "translateX(calc(100vw - 100px)) rotate(360deg)"],
        backgroundColor: ["gold", "blue", "crimson"],
        offset: [0, 0.3, 1]
    }, {
        duration: 3000,
        easing: "ease-in-out",
        delay: 1000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
    })

    squareAnimation.pause()

    const squareAnimation1 = element1.animate([
        {
            transform: "translateY(0)",
            easing: "ease-in-out"
        },
        {
            backgroundColor: "green",
            offset: 0.5
        },
        {
            transform: "translateY(calc(100vh - 300px)) rotate(360deg)"
        }

    ], {
        duration: 3000,
        delay: 1000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity
    })

    squareAnimation1.pause()

    const bgAnimationKeyframes = new KeyframeEffect(element2, [
        { backgroundColor: "aqua" },
        { backgroundColor: "purple" }
    ], {
        duration: 3000,
        delay: 1000,
        iterations: Infinity,
        direction: "alternate"
    })

    const bgAnimation = new Animation(bgAnimationKeyframes, document.timeline)
    bgAnimation.play()

    element3.forEach(element => {
        const lineAnimation = element.animate([
            {
                width: "calc(100vw - 80px)",
            }

        ], {
            duration: 7000,
            delay: 1000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity
        })

    });
});