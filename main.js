 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {

gsap.to("#FNAF", {
  scrollTrigger: {
    // trigger: "#FNAF img", // Element that triggers pinning
    start: "top top",             // Start when top of section hits top of viewport
    // end: "+=" + (window.innerHeight + 10),   
	  end: "+=200%",// End after scrolling 100% of container height
    pin: true,                    // Pin the container
    scrub: true,                  // Link animation to scrollbar
    markers: false                // Set to true to debug
  },
  opacity: 0,                     // Fade out
  // scale: 0.9,                     // Optional: slight zoom out
  ease: "power2.inOut"
});





//   gsap.to(".scene1", {
//     trigger: "scene.1",
//     start: "top top",
//     markers: true,
//     toggleActions: "restart restart reverse pause",
//   })
 });