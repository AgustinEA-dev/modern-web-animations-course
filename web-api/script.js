document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector(".square");
    element.animate([
        {
            transform: "translateX(0)"
        },
        {
            backgroundColor: "blue",
            offset: 0.8
        },
        {
            transform: "translateX(calc(100vw - 100px)) rotate(360deg)",
            backgroundColor: "crimson"
        }
    ], {
        duration: 3000,
        delay: 1000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        composite: "add"
    })
    // const squareAnimationKeyframes = new KeyframeEffect(element, [
    //     {
    //         transform: "translateX(0)"
    //     },
    //     {
    //         backgroundColor: "blue",
    //         offset: 0.8
    //     },
    //     {
    //         transform: "translateX(calc(100vw - 100px)) rotate(360deg)",
    //         backgroundColor: "crimson"
    //     }
    // ], {
    //     duration: 3000,
    //     delay: 1000,
    //     direction: "alternate",
    //     fill: "both",
    //     iterations: Infinity,
    //     composite: "add"
    // })
    // const squareAnimation = new Animation(squareAnimationKeyframes, document.timeline)
    // squareAnimation.play()
});