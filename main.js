document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

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



 //  FNAF 1 //
  const canvas = document.getElementById("foxy_canvas");
  const ctx = canvas.getContext("2d");

  let img = new Image();
  let frames = [];
  let state = { frame: 0 };

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

  // Foxy Sprite Load //
  fetch("./Assets/sprites/foxy_sprite.json")
    .then(response => response.json())
    .then(data => {
      frames = data.sprites;
      img.src = "./Assets/sprites/foxy_spritesheet.png";

      img.onload = () => {

        // Master Timeline // 
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#fnaf_1",
            start: "top top",
            end: "+=3800",   
            scrub: 2,
            pin: true          }
        });

        // Horizontal Scroll //
        tl.to(".track", {
          xPercent: -100,
          ease: "none"
        }, 0);

        // Foxy Animation // 
        tl.to(state, {
          frame: frames.length - 1,
          duration: 1,
         ease: "slow(0.5,0.5,false)",
          onUpdate: () => {
            drawFoxyFrame(Math.floor(state.frame));
          }
        }, 0);
      };
    });
  
// Text Animation //

gsap.fromTo(".text_1", 
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".text_1",
      start: "top+=3500px top+=200px",
      toggleActions: "play none none none",
      scrub: 2
    }
  }
);

// FNAF 2 //
let img2 = new Image();
let img3 = new Image();

let frames2 = [];
let frames3 = [];

let state2 = { frame: 0 };
let state3 = { frame: 0 };

// Draw Functions w/ Fetch //
function drawAbbyFrame(index) {
  const f = frames2[index];
  if (!f) return;

  const canvas2 = document.getElementById("abby_canvas");
  const ctx2 = canvas2.getContext("2d");

  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.drawImage(img2, f.x, f.y, f.width, f.height, 0, 0, canvas2.width, canvas2.height);
}

function drawPuppetFrame(index) {
  const f = frames3[index];
  if (!f) return;

  const canvas3 = document.getElementById("puppet_canvas");
  const ctx3 = canvas3.getContext("2d");

  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx3.drawImage(img3, f.x, f.y, f.width, f.height, 0, 0, canvas3.width, canvas3.height);
}

// Load + Promise //
Promise.all([
  fetch("./Assets/sprites/abby_stage_sprite.json").then(r => r.json()),
  fetch("./Assets/sprites/puppet_sprite.json").then(r => r.json())
]).then(([abbyData, puppetData]) => {

  frames2 = abbyData.sprites;
  frames3 = puppetData.sprites;

  img2.src = "./Assets/sprites/abby_spritesheet.png";
  img3.src = "./Assets/sprites/puppet_spritesheet.png";

  Promise.all([
    new Promise(res => img2.onload = res),
    new Promise(res => img3.onload = res)
  ]).then(() => {

    // Abby Canvas Trigger //
    gsap.to(state2, {
      frame: frames2.length - 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#abby_canvas",
        start: "top 5%",
        end: "bottom+=3000",
        pin: true,
        scrub: 0.8
      },
      onUpdate: () => drawAbbyFrame(Math.floor(state2.frame))
    });

    // Puppet Canvas Trigger //
    gsap.to(state3, {
      frame: frames3.length - 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#puppet_canvas",
        start: "top 5%",
        end: "bottom+=6000px",
        pin: true,
        scrub: true
      },
      onUpdate: () => drawPuppetFrame(Math.floor(state3.frame))
    });
});
   // FNAF 4 Scene //

let img4 = new Image();
let img5 = new Image();
let img6 = new Image();

let frames4 = [];
let frames5 = [];
let frames6 = [];

let state4 = { frame: 0 };
let state5 = { frame: 0 };
let state6 = { frame: 0 };

function drawMenuFrame(index) {
  const f = frames4[index];
  if (!f) return;

  const canvas4 = document.getElementById("menu_canvas");
  const ctx4 = canvas4.getContext("2d");

  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  ctx4.drawImage(img4, f.x, f.y, f.width, f.height, 0, 0, canvas4.width, canvas4.height);
}
function drawBedroomFrame(index) {
  const f = frames5[index];
  if (!f) return;

  const canvas5 = document.getElementById("bedroom_canvas");
  const ctx5 = canvas5.getContext("2d", { willReadFrequently: true });

  ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
  ctx5.drawImage(img5, f.x, f.y, f.width, f.height, 0, 0, canvas5.width, canvas5.height);
}
function drawBite87Frame(index) {
  const f = frames6[index];
  if (!f) return;

  const canvas6 = document.getElementById("bite_87");
  const ctx6 = canvas6.getContext("2d", { willReadFrequently: true });

  ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
  ctx6.drawImage(img6, f.x, f.y, f.width, f.height, 0, 0, canvas6.width, canvas6.height);
}

Promise.all([
  fetch("./Assets/sprites/fnaf4_menu.json").then(r => r.json()),
  fetch("./Assets/sprites/fnaf4_bedroom.json").then(r => r.json()),
  fetch("./Assets/sprites/fox_and_bros.json").then(r => r.json())
]).then(([menuData, bedroomData, biteData]) => {

  frames4 = menuData.sprites;
  frames5 = bedroomData.sprites;
  frames6 = biteData.sprites;

  img4.src = "./Assets/sprites/menu_spritesheet.png";
  img5.src = "./Assets/sprites/bedroom_spritesheet.png";
  img6.src = "./Assets/sprites/bite87_spritesheet.png";

  // WAIT FOR IMAGES PROPERLY
  Promise.all([
    new Promise(res => img4.onload = res),
    new Promise(res => img5.onload = res),
    new Promise(res => img6.onload = res)
  ]).then(() => {


   document.querySelectorAll("#menu_canvas, #bedroom_canvas, #bite_87")
  .forEach(c => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  });
let activeSection = null;

function setActive(section) {
  activeSection = section;
}
    const panels = document.querySelectorAll(".panel2, .right_side, .left_side").length;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#fnaf_4",
    start: "top top+=35px",
    end: () => "+=" + window.innerWidth * panels * 2,
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});

tl.to(".track2", {
  xPercent: -75,
  ease: "none"
});
let lastFrame4 = -1;

gsap.to(state4, {
  frame: frames4.length - 1,
  duration: 5,
  ease: "none",
  scrollTrigger: {
    trigger: "#menu_canvas",
   toggleActions: "play pause resume reset",
  },
  onUpdate: () => {
    const frame = Math.floor(state4.frame);
    if (frame !== lastFrame4) {
      lastFrame4 = frame;
      requestAnimationFrame(() => drawMenuFrame(frame));
    }
  }
});
let ticking = false;
let lastFrame5 = -1;

gsap.to(state5, {
  frame: frames5.length - 1,
  duration: 10,
  ease: "none",
  scrollTrigger: {
    containerAnimation: tl,
    trigger: "#bedroom_canvas",
     toggleActions: "play pause resume reset",
  },
  onUpdate: () => {
    const frame = Math.floor(state5.frame);
    if (frame !== lastFrame5 && !ticking) {
      lastFrame5 = frame;
      ticking = true
      requestAnimationFrame(() => drawBedroomFrame(frame));
      ticking = false;
    }
  }
});

let lastFrame6 = -1;

gsap.to(state6, {
  frame: frames6.length - 1,
  duration: 10,
  ease: "none",
  scrollTrigger: {
    containerAnimation: tl,
    trigger: "#bite_87",
     toggleActions: "play pause resume reverse",
  },
  onUpdate: () => {
    const frame = Math.floor(state6.frame);
    if (frame !== lastFrame6) {
      lastFrame6 = frame;
      requestAnimationFrame(() => drawBite87Frame(frame));
    }
  }
});
    ScrollTrigger.refresh();
  });
  console.log("FNAF 4 loaded");
});
ScrollTrigger.config({
  limitCallbacks: true
});
});
});