 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
const pinnedPanels = gsap.utils.toArray(".title-card");
gsap.set(pinnedPanels[0], { autoAlpha: 1 });

pinnedPanels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    endTrigger: "h1",
    end: "top",
    pin: true,
    pinSpacing: false,
    onEnter: () => gsap.to(panel, { autoAlpha: 1, duration: 0.35 }),
    onLeaveBack: () => i && gsap.to(panel, { autoAlpha: 0 }),
    markers: {
      indent: 150 * i,
      startColor: "white",
      endColor: "green"
    },
    id: i + 1
     });
  });

const main = document.querySelector(".parallax_freddy");

gsap.set("main", { perspective: 650 });

// const outerRX = gsap.quickTo(".parallax_freddy", "rotationX", { ease: "power3" });
// const outerRY = gsap.quickTo(".parallax_freddy", "rotationY", { ease: "power3" });
const innerX = gsap.quickTo("#pupils", "#eyesockets", "x", { ease: "power3" });
const innerY = gsap.quickTo("#pupils", "#eyesockets", "y", { ease: "power3" });

main.addEventListener("pointermove", (e) => {
  outerRX(gsap.utils.interpolate(15, -15, e.y / window.innerHeight));
  outerRY(gsap.utils.interpolate(-15, 15, e.x / window.innerWidth));
  innerX(gsap.utils.interpolate(-30, 30, e.x / window.innerWidth));
  innerY(gsap.utils.interpolate(-30, 30, e.y / window.innerHeight));
});

main.addEventListener("pointerleave", (e) => {
  outerRX(0);
  outerRY(0);
  innerX(0);
  innerY(0);
});


//   gsap.to(".scene1", {
//     trigger: "scene.1",
//     start: "top top",
//     markers: true,
//     toggleActions: "restart restart reverse pause",
//   })
 });