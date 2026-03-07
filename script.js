gsap.registerPlugin(ScrollTrigger);

gsap.from(".imageanimation",{
    opacity:0,
    duration:1,
    scale:3,
    ease: "power4.in"
})

gsap.to(".imageanimation", {
  y: 700,
  ease: "none",
  scrollTrigger: {
    trigger: ".coloranimation",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.from(".textanimation",{
    x:1000,
    duration:1,
    opacity:0,
    scale:0,
    delay:0.7
});
gsap.to(".textanimation",{
    xPercent:-100,
    duration:20,
    ease:"none",
    repeat:-10
});

gsap.from(".opacityanimation",{
    opacity:0,
    duration:2,
    ease: "power4.in"
})

gsap.from(".coloranimation",{
    backgroundColor: "#000000",
    duration:2
})

gsap.from(".navbaranimation",{
    y:-200,
    duration:2,
    stagger:0.2,
    opacity:0,
})

gsap.from(".footeranimation",{
    x:-200,
    duration:2,
    stagger:0.2,
    opacity:0
})

gsap.to(".togethertexts",{
    xPercent:-200,
    duration:15,
    ease:"none",
    repeat:-1
})

gsap.to(".reachoutanim",{
    xPercent:-100,
    duration:20,
    ease:"none",
    repeat:-10
})


gsap.from(".page2text",{
    
})