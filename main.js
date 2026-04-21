document.addEventListener("DOMContentLoaded", () => {


  // TITLE FADE + PIN //
  gsap.to("#FNAF", {
    scrollTrigger: {
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true,
      markers: {
    startColor: "yellow",
    endcolor: "brown"
  }
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
        end: "+=1000",
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
            pin: true,
            end: "+=270%",
            scrub: true,
            markers: {
              startColor: "blue",
              endcolor: "green"
  }
            
          },
          onUpdate: () => {
            drawFoxyFrame(Math.floor(state.frame));
          }
        });

      };
//     gsap.from("#text1", {
//   opacity: 0,
//   y: 100,
//   scrollTrigger: {
//     trigger: "#fnaf_1",
//     start: "bottom center",
//     toggleActions: "play none none none"
//   }
// });
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
  }
// Freddy's Pizzeria //
const {innerHeight} = window;

gsap.to("#zoom-in", {
  scale: 5, stagger: 0.50, duration:1,
  ease: "none",
  scrollTrigger:{
    trigger: ".fnaf_2 h1",
  start: "bottom+=250px top",
  pin: true,
  end: "+=800px",
  scrub: true,
  markers: {
    startColor: "orange",
    endcolor: "purple"
  }
  
  },
  opacity: 0,
    ease: "power2.inOut"
});

// Abby Canvas //

const canvas2 = document.getElementById("abby_canvas");
  const ctx2 = canvas2.getContext("2d");

  let img2 = new Image();
  let frames2 = [];

  fetch("./Assets/sprites/abby_stage_sprite.json")
    .then(response => {
      if (!response.ok) throw new Error("JSON not found");
      return response.json();
    })
    .then(data => {

      frames2 = data.sprites;

      img2.src = "./Assets/sprites/abby_spritesheet.png";

      img2.onload = () => {

        const state = { frame: 0 };

        gsap.from(state, {
          frame: frames2.length - 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".abby_canvas",
            start: "top 100px",
            pin: true,
            end: "+=200%",
            scrub: true,
            markers: {
              startColor: "red",
              endcolor: "green"
  }
            
          },
          onUpdate: () => {
            drawAbbyFrame(Math.floor(state.frame));
          }
        });
    };
  });
function drawAbbyFrame(index) {
    const f = frames2[index];
    if (!f) return;

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    ctx2.drawImage(
      img2,
      f.x, f.y, f.width, f.height,
      0, 0, canvas2.width, canvas2.height
    );
  }
});