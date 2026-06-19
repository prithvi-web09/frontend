window.addEventListener("load", () => {
    let tl = gsap.timeline()
    tl.from(".nav",{
        opacity:0, y:-60, duration:0.6, delay: 1, ease: "power3.out"
    })
    tl.from(".logo h1",{
        opacity:0, x:-40, duration: 1, stagger: 0.2, ease:"power2.out"
    })
    tl.from(".specification h3",{
        opacity:0, x:60, duration: 1, stagger: 0.2, ease:"power2.out"
    })
    tl.from(".buy-btn",{
        opacity: 0, x:40, duration:0.5, ease:"power2.out"
    })

    let tm = gsap.timeline()
    const split = new SplitType(".main h1", { types: "chars" })

    tm.from(split.chars,{
        opacity:0, y:80, rotateX:-90, stagger:0.05, duration:0.8, ease: "back.out(1.7)"
    })
    tm.from(".main button", {
        opacity: 0, scale: 0.8, duration: 0.6, ease: "back.out(2)"
    }, "-=0.2")
    tm.from(".main h3", {
        opacity: 0, y: 20, duration: 0.8, ease: "power2.out"
    }, "-=0.3")
    tm.from(".main h4", {
        opacity: 0, y: 10, duration: 0.5, ease: "power1.out"
    }, "-=0.3")

    let image = document.querySelector(".image img")
    image.addEventListener("mouseenter", function(){
        gsap.to(".image img", { scale: 0.7 })
    })
    image.addEventListener("mouseleave", function(){
        gsap.to(".image img", { scale: 1 })
    })
})
