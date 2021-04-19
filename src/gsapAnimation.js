let tl = gsap.timeline()

tl.from("#main", {
    duration: 2, 
    opacity: 0, 
    //scale: 0.3, 
    //ease:"elastic"
    //x: 600
})
    .from("#main-img", {
    x:500,
    opacity: 0,
    duration: 2
}, "-=1")

    .from("#mission", {
    duration: 2, 
    opacity: 0, 
    }, "-=3")

    .from("#mission-info", {
    duration: 2, 
    opacity: 0,
    }, "-=3")
    

gsap.from(["#trends", "#trends-info"], {
    scrollTrigger: {
        trigger: "#trends",
        start: "top center"
    },
    duration: 2, 
    opacity: 0, 
    // scale: 0.3, 
    // ease:"power1"

})

gsap.from(["#collection"], {
    scrollTrigger: {
        trigger: "#collection",
        start: "top center"
    },
    duration: 2, 
    opacity: 0, 
    // scale: 0.3, 
    // ease:"power1"

})

