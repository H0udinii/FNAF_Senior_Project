document.addEventListener("DOMContentLoaded", () => {


  // TITLE FADE + PIN //
  gsap.to("#FNAF", {
    scrollTrigger: {
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true,
    },
    opacity: 0,
    ease: "power2.inOut"
  });



  // HORIZONTAL SCROLL // 
  const track = document.querySelector(".track");

  if (track) {
    gsap.to(track, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: "#fnaf_1",
        start: "top top",
        end: "bottom",
        scrub: 1,
        toggleActions: "play pause resume reset",
        anticipatePin: 1,
        markers: {
    startColor: "pink",
    endcolor: "blue"
  }
      }
    });
  }


  // Foxy Canvas //
  
  const canvas = document.getElementById("foxy_canvas");
  const ctx = canvas.getContext("2d");

  let img = new Image();
  let frames = [];

  fetch("./Assets/sprites/foxy_sprite.json")
    .then(response => {
      if (!response.ok) throw new Error("JSON not found");
      return response.json();
    })
    .then(data => {

      frames = data.sprites;

      img.src = "./Assets/sprites/foxy_spritesheet.png";

      img.onload = () => {

        const state = { frame: 0 };

        gsap.to(state, {
          frame: frames.length - 1,
          ease: "none",

          scrollTrigger: {
            trigger: "#fnaf_1",
            start: "top top",
            end: "+=570%",
            pin: true,
            scrub: true,
            markers: {
              startColor: "blue",
              endColor: "green"
            },

            onLeave: () => {
              console.log("FOXY DONE");
              console.log(document.querySelector(".text_1"));
              document.querySelector(".text_1")?.classList.add("show");
            }
            
          },

  onUpdate: () => {
    drawFoxyFrame(Math.floor(state.frame));
     }
      });

    };
  });
  function drawFoxyFrame(index) {
    const f = frames[index];
    if (!f) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      img,
      f.x, f.y, f.width, f.height,
      0, 0, canvas.width, canvas.height
    );
  };
  gsap.to(".text_1", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#fnaf_1",
    start: "bottom center",
    toggleActions: "play none none none"
  }
});
  
// // Freddy's Pizzeria //
// const {innerHeight} = window;

// gsap.to("#fnaf_2", {
//   scale: 5, stagger: 0.50, duration:3,
//   ease: "none",
//   scrollTrigger:{
//     trigger: "#zoom-in",
//   start: "top bottom",
//   end: "+=3000",
//   pin: "#fnaf_2",
//   anticipatePin: 1,
//   scrub: true,
//   markers: {
//     startColor: "orange",
//     endcolor: "green"
//   }
  
//   },
//   opacity: 0,
//     ease: "power2.inOut"
// });

// // Abby Canvas //

// const canvas2 = document.getElementById("abby_canvas");
//   const ctx2 = canvas2.getContext("2d");

//   let img2 = new Image();
//   let frames2 = [];

//   fetch("./Assets/sprites/abby_stage_sprite.json")
//     .then(response => {
//       if (!response.ok) throw new Error("JSON not found");
//       return response.json();
//     })
//     .then(data => {

//       frames2 = data.sprites;

//       img2.src = "./Assets/sprites/abby_spritesheet.png";
      
//       img2.onload = () => {
//         const state = {frame: 0};

//         gsap.to(state, {
//           frame: frames2.length - 1,
//           ease: "none",
//           scrollTrigger: {
//             trigger: ".panel2",
//             start: "top 100px",    
//             end: "+=200%",
//             pin: true,
//             scrub: true
            
//           },
          
//           onUpdate: () => {
//             drawAbbyFrame(Math.floor(state.frame));
//           }
//         });
//     };
//   });
// function drawAbbyFrame(index) {
//     const f = frames2[index];
//     if (!f) return;

//     ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

//     ctx2.drawImage(
//       img2,
//       f.x, f.y, f.width, f.height,
//       0, 0, canvas2.width, canvas2.height
//     );
//   }
  
  
//   // Puppet Canvas
//   const canvas3 = document.getElementById("puppet_canvas");
//   const ctx3 = canvas3.getContext("2d");

//   let img3 = new Image();
//   let frames3 = [];

//   fetch("./Assets/sprites/puppet_sprite.json")
//   .then(response => {
//     if (!response.ok) throw new Error("JSON not found");
//     return response.json();
//   })
//   .then(data => {
    
//     frames3 = data.sprites;
    
//     img3.src = "./Assets/sprites/puppet_spritesheet.png";
//     img3.onload = () => {
   
//       const state = {frame: 0};

//       gsap.to(state, {
//         frame: frames3.length - 1,
//           ease: "none",
//           scrollTrigger: {
//             trigger: ".panel3",
//             start: "top 100px",    
//             end: "+=200%",
//             pin: true,
//             scrub: true
//       },
      
//       onUpdate: () => {
//         drawPuppetFrame(Math.floor(state.frame));
//       }
//   });     
//     };
//   });
//   function drawPuppetFrame(index){
//     const f = frames3[index];
//     if(!f) return;
//     ctx3.clearRect(0, 0, canvas3.width, canvas3.height);

//     ctx3.drawImage(
//       img3, f.x, f.y, f.width, f.height, 0, 0, canvas3.width, canvas3.height
//     );
//   }
});
