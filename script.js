window.addEventListener("load", () => {
    let tl = gsap.timeline()
    tl.from(".nav",{
        opacity:0, 
        y:-60, 
        duration:0.6, 
        delay: 1, 
        ease: "power3.out"
    })
    tl.from(".logo h1",{
        opacity:0, 
        x:-40, 
        duration: 1, 
        stagger: 0.2, 
        ease:"power2.out"
    })
    tl.from(".specification h3",{
        opacity:0, 
        x:60, 
        duration: 1, 
        stagger: 0.2, 
        ease:"power2.out"
    })
    tl.from(".buy-btn",{
        opacity: 0, 
        x:40, 
        duration:0.5, 
        ease:"power2.out"
    })

    let tm = gsap.timeline()
    const split = new SplitType(".main h1", 
        { 
            types: "chars" 
        })

    tm.from(split.chars,{
        opacity:0, 
        y:80, 
        rotateX:-90, 
        stagger:0.05, 
        duration:0.8, 
        ease: "back.out(1.7)"
    })
    tm.from(".main button", {
        opacity: 0, 
        scale: 0.8, 
        duration: 0.6, 
        ease: "back.out(2)"
    }, "-=0.2")
    tm.from(".main h3", {
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        ease: "power2.out"
    }, "-=0.3")
    tm.from(".main h4", {
        opacity: 0, 
        y: 10, 
        duration: 0.5, 
        ease: "power1.out"
    }, "-=0.3")

    let image = document.querySelector(".image img")
    image.addEventListener("click", function(){
        gsap.from(".image img", {
            scale:0.8,
            opacity:0,
            duration: 0.8,
            delay:0.4,
            ease:"bounce.out",
            
        })
    })
    
})
gsap.registerPlugin(ScrollTrigger);

gsap.from(".special1 i", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special1",
        start: "top 70%", 
        pin:"true"  // optional but recommended
    }
});
gsap.from(".special1 h3", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special1",
        start: "top 70%",   // optional but recommended
    }
});
gsap.from(".special1 p", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special1",
        start: "top 70%",   // optional but recommended
    }
});
gsap.from(".special2 i", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special2",
        start: "top 70%",   // optional but recommended
    }
});
gsap.from(".special2 h3", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special2",
        start: "top 70%",   // optional but recommended
    }
});
gsap.from(".special2 p", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special2",
        start: "top 70%",   // optional but recommended
    }
});
gsap.from(".special3 i", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special3",
        start: "top 70%",   // optional but recommended
    }
});
gsap.from(".special3 h3", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special3",
        start: "top 90%",   // optional but recommended
    }
});
gsap.from(".special3 p", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out",
    scrollTrigger: {   // lowercase "s"
        trigger: ".special3",
        start: "top 100%",   // optional but recommended
    }
});
gsap.from(".tilt img",{
    opacity:0,
    duration: 0.8,
    delay:0.4,
    ease:"bounce.out",
    scrollTrigger:{
        trigger:".tilt img",
        start: "top 70%",
        
    }
})
gsap.to(".vibrant-clarity",{
    backgroundPosition: "100% 50%",
    ease: "none",
    scrollTrigger: {
        trigger: ".vibrant",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
})
gsap.to(".vibrant h2", {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.2,
    ease: "power3.inOut",
    scrollTrigger: {
        trigger: ".vibrant",
        start: "top 90%"
    }
});
