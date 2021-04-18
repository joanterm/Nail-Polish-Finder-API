let tl = gsap.timeline()

tl.from("#main", {
    duration: 2, 
    opacity: 0, 
    // scale: 0.3, 
    // ease:"back"
    y: 600
})
    .from("#main-img", {
    x:500,
    opacity: 0,
    duration: 2
}, "-=1")
    

gsap.from("#trends", {
    scrollTrigger: {
        trigger: "#trends",
        start: "bottom center"
    },
    duration: 4, 
    opacity: 0, 
    // scale: 0.3, 
    // ease:"power1"

})

