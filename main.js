 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
 ScrollTrigger.create({
  trigger: "div",
  start:"top",
  end: "+=900",
  endTrigger: "h1",
  pin: false,
  markers: true
  });







//   gsap.to(".scene1", {
//     trigger: "scene.1",
//     start: "top top",
//     markers: true,
//     toggleActions: "restart restart reverse pause",
//   })
 });