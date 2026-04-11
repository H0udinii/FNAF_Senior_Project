 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
gsap.to(".scene1",{
    ScrollTrigger:{
        trigger: "#fnaf_1",
        start: "top bottom",
        markers: true,
        
}})


 });