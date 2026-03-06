
gsap.from(".imageanimation",{
    opacity:0,
    duration:1,
    scale:3,
    ease: "power4.in"
})
gsap.from(".textanimation",{
    x:1000,
    duration:1,
    opacity:0,
    scale:0,
    delay:0.7
});
gsap.to(".textanimation",{
    xPercent:-50,
    duration:12,
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

