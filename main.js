 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
 ScrollTrigger.create({
  trigger: "div",
  start:"top",
  end: "+=900",
  endTrigger: "h1",
  pin: true,
  markers: true
  })

  let sections = gsap.utils.toArray(".parallax_foxy");
  sections.forEach(section =>{
    let canvas = section.querySelector("canvas");
    canvas ? intitCanvas(section, canvas): initOther(section);
});





//   gsap.to(".scene1", {
//     trigger: "scene.1",
//     start: "top top",
//     markers: true,
//     toggleActions: "restart restart reverse pause",
//   })
 });