document.addEventListener("DOMContentLoaded", () => {


  // TITLE FADE + PIN //
  gsap.to("#FNAF", {
    scrollTrigger: {
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true
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
        markers: true
      }
    });
  }


  // FOXY CANVAS SPRITES //
  
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
            end: "+=200%",
            scrub: true
            
          },
          onUpdate: () => {
            drawFrame(Math.floor(state.frame));
          }
        });

      };
    });


  function drawFrame(index) {
    const f = frames[index];
    if (!f) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      img,
      f.x, f.y, f.width, f.height,
      0, 0, canvas.width, canvas.height
    );
  }

});