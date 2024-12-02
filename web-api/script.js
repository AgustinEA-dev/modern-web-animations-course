//Three ways to define Keyframes

document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector(".square");
    const element1 = document.querySelector(".square1")
    const element2 = document.querySelector(".background")
    const element3 = document.querySelectorAll(".line")

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

        const bgAnimationKeyframes = new KeyframeEffect(element2, [
        { backgroundColor: "aqua" },
        { backgroundColor: "purple" }
    ], {
        duration: 3000,
        delay: 1000,
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