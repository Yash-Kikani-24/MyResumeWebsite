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

// 2. Animate the words using GSAP
gsap.from(myText.words, {
  scrollTrigger: {
    trigger: ".page2text",
    start: "top 90%", // Starts when the top of the text enters near the bottom of the screen
    end: "bottom 50%", // Finishes when the bottom of the text hits the middle of the screen
    scrub: 1, // Ties it to scroll. '1' adds a smooth 1-second catch-up delay. Use 'true' for instant locking.
  },
  color: "#000000",
  stagger: 0.1, // Creates the wave effect across the words during the scroll
});

gsap.from(".page2text2", {
  scrollTrigger: {
    trigger: ".page2text2",
    start: "top 90%",
    end: "bottom 60%",
    scrub: 1, // Keeps it tied to your scroll wheel like the heading
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

// Lines 1 & 3: Move Right to Left
gsap.from([skillRows[1], skillRows[3]], {
  xPercent: -50, // Moves them left as you scroll down
  scrollTrigger: {
    trigger: "#skills",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

// Lines 2 & 4: Move Left to Right
gsap.from([skillRows[0], skillRows[2]], {
  xPercent: 50, // Moves them right as you scroll down
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

// Trigger the flip when Content 2 scrolls into view
// Set up 3D perspective for the flip
gsap.set(".num-stack div", { transformPerspective: 800 });

// Loop through sections 2 to 6 to create the triggers
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

// GSAP quickTo makes mouse tracking extremely smooth
let xTo = gsap.quickTo(cursorLogo, "x", { duration: 0.2, ease: "power3" });
let yTo = gsap.quickTo(cursorLogo, "y", { duration: 0.2, ease: "power3" });

techItems.forEach((item) => {
  // Show image and change source on enter
  item.addEventListener("mouseenter", () => {
    cursorLogo.src = item.getAttribute("data-img");
    gsap.to(cursorLogo, { opacity: 1, scale: 1, duration: 0.3 });
  });

  // Hide image on leave
  item.addEventListener("mouseleave", () => {
    gsap.to(cursorLogo, { opacity: 0, scale: 0, duration: 0.3 });
  });

  // Move image with mouse
  item.addEventListener("mousemove", (e) => {
    xTo(e.clientX - 48); // -48 centers the 96px width image on your mouse
    yTo(e.clientY - 48);
  });
});

// Shrink Project 1 when Project 2 arrives
gsap.to(".project-1", {
    scale: 0.85, opacity: 0.2,
    scrollTrigger: {
        trigger: ".project-2",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});

// Shrink Project 2 when Project 3 arrives
gsap.to(".project-2", {
    scale: 0.85, opacity: 0.2,
    scrollTrigger: {
        trigger: ".project-3",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});


