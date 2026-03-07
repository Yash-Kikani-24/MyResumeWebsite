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


const btn = document.querySelector('.hover-btn');

btn.addEventListener('mouseenter', function(e) {
    const rect = this.getBoundingClientRect();
    this.style.setProperty('--x', (e.clientX - rect.left) + 'px');
    this.style.setProperty('--y', (e.clientY - rect.top) + 'px');
});

btn.addEventListener('mouseleave', function(e) {
    const rect = this.getBoundingClientRect();
    this.style.setProperty('--x', (e.clientX - rect.left) + 'px');
    this.style.setProperty('--y', (e.clientY - rect.top) + 'px');
});

gsap.from(".edu-left", {
    scrollTrigger: { trigger: ".edu-left", start: "top 150%", scrub:1 },
    x: -200, 
    opacity: 0, 
    duration: 1, 
    ease: "power2.out"
});

gsap.from(".edu-right", {
    scrollTrigger: { trigger: ".edu-right", start: "top 150%", scrub:1 },
    x: 200, 
    opacity: 0, 
    duration: 1, 
    ease: "power2.out"
});

const skillRows = document.querySelectorAll("#skills .whitespace-nowrap");

// Lines 1 & 3: Move Right to Left
gsap.from([skillRows[1], skillRows[3]], {
    xPercent: -50, // Moves them left as you scroll down
    scrollTrigger: {
        trigger: "#skills",
        start: "top bottom", 
        end: "bottom top",
        scrub: 1
    }
});

// Lines 2 & 4: Move Left to Right
gsap.from([skillRows[0], skillRows[2]], {
    xPercent: 50, // Moves them right as you scroll down
    scrollTrigger: {
        trigger: "#skills",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});

const skillBtns = document.querySelectorAll('.skill-btn');

skillBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        this.style.setProperty('--x', (e.clientX - rect.left) + 'px');
        this.style.setProperty('--y', (e.clientY - rect.top) + 'px');
    });

    btn.addEventListener('mouseleave', function(e) {
        const rect = this.getBoundingClientRect();
        this.style.setProperty('--x', (e.clientX - rect.left) + 'px');
        this.style.setProperty('--y', (e.clientY - rect.top) + 'px');
    });
});


gsap.set([".num-1", ".num-2"], { transformPerspective: 800 });

// Trigger the flip when Content 2 scrolls into view
ScrollTrigger.create({
    trigger: ".content-2",
    start: "top 50%", // Triggers when Section 2 is halfway up the screen
    onEnter: () => flipNumbers(true),
    onLeaveBack: () => flipNumbers(false)
});

// The animation logic
function flipNumbers(isForward) {
    gsap.to(".num-1", { 
        rotationX: isForward ? -90 : 0, 
        opacity: isForward ? 0 : 1, 
        duration: 0.5 
    });
    gsap.to(".num-2", { 
        rotationX: isForward ? 0 : 90, 
        opacity: isForward ? 1 : 0, 
        duration: 0.5 
    });
}