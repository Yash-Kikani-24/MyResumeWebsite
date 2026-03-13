gsap.registerPlugin(ScrollTrigger);

gsap.from(".imageanimation", {
  opacity: 0,
  duration: 1,
  scale: 3,
  ease: "power4.in",
});

gsap.to(".imageanimation", {
  y: 700,
  ease: "none",
  scrollTrigger: {
    trigger: ".coloranimation",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from(".textanimation", {
  x: 1000,
  duration: 1,
  opacity: 0,
  scale: 0,
  delay: 0.7,
});
gsap.to(".textanimation", {
  xPercent: -100,
  duration: 20,
  ease: "none",
  repeat: -10,
});

gsap.from(".opacityanimation", {
  opacity: 0,
  duration: 2,
  ease: "power4.in",
});

gsap.from(".coloranimation", {
  backgroundColor: "#000000",
  duration: 2,
});

gsap.from(".navbaranimation", {
  y: -200,
  duration: 2,
  stagger: 0.2,
  opacity: 0,
});

gsap.from(".footeranimation", {
  x: -200,
  duration: 2,
  stagger: 0.2,
  opacity: 0,
});

gsap.to(".togethertexts", {
  xPercent: -200,
  duration: 15,
  ease: "none",
  repeat: -1,
});

gsap.to(".reachoutanim", {
  xPercent: -100,
  duration: 20,
  ease: "none",
  repeat: -10,
});

const myText = new SplitType(".page2text", { types: "words" });

gsap.from(myText.words, {
  scrollTrigger: {
    trigger: ".page2text",
    start: "top 90%", 
    end: "bottom 50%", 
    scrub: 1, 
  },
  color: "#000000",
  stagger: 0.1,
});

gsap.from(".page2text2", {
  scrollTrigger: {
    trigger: ".page2text2",
    start: "top 90%",
    end: "bottom 60%",
    scrub: 1, 
  },
  color: "#000000",
});

const btn = document.querySelector(".hover-btn");

btn.addEventListener("mouseenter", function (e) {
  const rect = this.getBoundingClientRect();
  this.style.setProperty("--x", e.clientX - rect.left + "px");
  this.style.setProperty("--y", e.clientY - rect.top + "px");
});

btn.addEventListener("mouseleave", function (e) {
  const rect = this.getBoundingClientRect();
  this.style.setProperty("--x", e.clientX - rect.left + "px");
  this.style.setProperty("--y", e.clientY - rect.top + "px");
});

gsap.from(".edu-left", {
  scrollTrigger: { trigger: ".edu-left", start: "top 150%", scrub: 1 },
  x: -200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".edu-right", {
  scrollTrigger: { trigger: ".edu-right", start: "top 150%", scrub: 1 },
  x: 200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

const skillRows = document.querySelectorAll("#skills .whitespace-nowrap");


gsap.from([skillRows[1], skillRows[3]], {
  xPercent: -50, 
  scrollTrigger: {
    trigger: "#skills",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.from([skillRows[0], skillRows[2]], {
  xPercent: 50,
  scrollTrigger: {
    trigger: "#skills",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

const skillBtns = document.querySelectorAll(".skill-btn");

skillBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", function (e) {
    const rect = this.getBoundingClientRect();
    this.style.setProperty("--x", e.clientX - rect.left + "px");
    this.style.setProperty("--y", e.clientY - rect.top + "px");
  });

  btn.addEventListener("mouseleave", function (e) {
    const rect = this.getBoundingClientRect();
    this.style.setProperty("--x", e.clientX - rect.left + "px");
    this.style.setProperty("--y", e.clientY - rect.top + "px");
  });
});

gsap.set([".num-1", ".num-2"], { transformPerspective: 800 });

gsap.set(".num-stack div", { transformPerspective: 800 });

for (let i = 2; i <= 6; i++) {
    ScrollTrigger.create({
        trigger: `.content-${i}`,
        start: "top 50%", 
        onEnter: () => {
            gsap.to(`.num-${i-1}`, { rotationX: -90, opacity: 0, duration: 0.5 });
            gsap.to(`.num-${i}`, { rotationX: 0, opacity: 1, duration: 0.5 });
        },
        onLeaveBack: () => {
            gsap.to(`.num-${i}`, { rotationX: 90, opacity: 0, duration: 0.5 });
            gsap.to(`.num-${i-1}`, { rotationX: 0, opacity: 1, duration: 0.5 });
        }
    });
}

const cursorLogo = document.querySelector("#cursor-logo");
const techItems = document.querySelectorAll(".tech-item");

let xTo = gsap.quickTo(cursorLogo, "x", { duration: 0.2, ease: "power3" });
let yTo = gsap.quickTo(cursorLogo, "y", { duration: 0.2, ease: "power3" });

techItems.forEach((item) => {
  
  item.addEventListener("mouseenter", () => {
    cursorLogo.src = item.getAttribute("data-img");
    gsap.to(cursorLogo, { opacity: 1, scale: 1, duration: 0.3 });
  });


  item.addEventListener("mouseleave", () => {
    gsap.to(cursorLogo, { opacity: 0, scale: 0, duration: 0.3 });
  });


  item.addEventListener("mousemove", (e) => {
    xTo(e.clientX - 48); 
    yTo(e.clientY - 48);
  });
});


gsap.to(".project-1", {
    scale: 0.85, opacity: 0.2,
    scrollTrigger: {
        trigger: ".project-2",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});


gsap.to(".project-2", {
    scale: 0.85, opacity: 0.2,
    scrollTrigger: {
        trigger: ".project-3",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});


