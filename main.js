document.addEventListener("\x44\x4f\x4d\x43\x6f\x6e\x74\x65\x6e\x74\x4c\x6f\x61\x64\x65\x64", () => {
  "\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74";
gsap.registerPlugin(ScrollTrigger);

  // TITLE FADE + PIN //
  gsap.to("\x23\x46\x4e\x41\x46", {
    scrollTrigger: {
      start: "\x74\x6f\x70\x20\x74\x6f\x70",
      end: "\x2b\x3d\x32\x30\x30\x25",
      pin: true,
      scrub: true,
    },
    opacity: 0,
    ease: "\x70\x6f\x77\x65\x72\x32\x2e\x69\x6e\x4f\x75\x74"
  });



 //  FNAF 1 //
  const _krTDDBi = document.getElementById("\x66\x6f\x78\x79\x5f\x63\x61\x6e\x76\x61\x73");
  const _lREPE = canvas.getContext("\x32\x64");

  let _kko = new Image();
  let _Tne = [];
  let _PVz = { frame: 0 };

  function fngBXZOxN(index) {
    const _euUbGLB = frames[index];
    if (!f) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      img,
      f.x, f.y, f.width, f.height,
      0, 0, canvas.width, canvas.height
    );
  }

  // Foxy Sprite Load //
  fetch("\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x66\x6f\x78\x79\x5f\x73\x70\x72\x69\x74\x65\x2e\x6a\x73\x6f\x6e")
    .then(response => response.json())
    .then(data => {
      frames = data.sprites;
      img.src = "\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x66\x6f\x78\x79\x5f\x73\x70\x72\x69\x74\x65\x73\x68\x65\x65\x74\x2e\x70\x6e\x67";

      img.onload = () => {

        // Master Timeline // 
        const _QvBr = gsap.timeline({
          scrollTrigger: {
            trigger: "\x23\x66\x6e\x61\x66\x5f\x31",
            start: "\x74\x6f\x70\x20\x74\x6f\x70",
            end: "\x2b\x3d\x33\x38\x30\x30",   
            scrub: 2,
            pin: true          }
        });

        // Horizontal Scroll //
        tl.to("\x2e\x74\x72\x61\x63\x6b", {
          xPercent: -100,
          ease: "\x6e\x6f\x6e\x65"
        }, 0);

        // Foxy Animation // 
        tl.to(state, {
          frame: frames.length - 1,
          duration: 1,
         ease: "\x73\x6c\x6f\x77\x28\x30\x2e\x35\x2c\x30\x2e\x35\x2c\x66\x61\x6c\x73\x65\x29",
          onUpdate: () => {
            drawFoxyFrame(Math.floor(state.frame));
          }
        }, 0);
      };
    });
  
// Text Animation //

gsap.fromTo("\x2e\x74\x65\x78\x74\x5f\x31", 
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 3,
    ease: "\x70\x6f\x77\x65\x72\x32\x2e\x6f\x75\x74",
    scrollTrigger: {
      trigger: "\x2e\x74\x65\x78\x74\x5f\x31",
      start: "\x74\x6f\x70\x2b\x3d\x33\x35\x30\x30\x70\x78\x20\x74\x6f\x70\x2b\x3d\x32\x30\x30\x70\x78",
      toggleActions: "\x70\x6c\x61\x79\x20\x6e\x6f\x6e\x65\x20\x6e\x6f\x6e\x65\x20\x6e\x6f\x6e\x65",
      scrub: 2
    }
  }
);

// FNAF 2 //
let _HiWOQAve = new Image();
let _uxpgBN = new Image();

let _IBe = [];
let _wnZJPwF = [];

let _uvAsgOw = { frame: 0 };
let _BjPbeFBT = { frame: 0 };

// Draw Functions w/ Fetch //
function fnzEKkMV(index) {
  const _euUbGLB = frames2[index];
  if (!f) return;

  const _imXBBE = document.getElementById("\x61\x62\x62\x79\x5f\x63\x61\x6e\x76\x61\x73");
  const _oVNZDxe = canvas2.getContext("\x32\x64");

  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.drawImage(img2, f.x, f.y, f.width, f.height, 0, 0, canvas2.width, canvas2.height);
}

function fnzafYCyS(index) {
  const _euUbGLB = frames3[index];
  if (!f) return;

  const _NTMXtgF = document.getElementById("\x70\x75\x70\x70\x65\x74\x5f\x63\x61\x6e\x76\x61\x73");
  const _xSBUiX = canvas3.getContext("\x32\x64");

  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx3.drawImage(img3, f.x, f.y, f.width, f.height, 0, 0, canvas3.width, canvas3.height);
}

// Load + Promise //
Promise.all([
  fetch("\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x61\x62\x62\x79\x5f\x73\x74\x61\x67\x65\x5f\x73\x70\x72\x69\x74\x65\x2e\x6a\x73\x6f\x6e").then(r => r.json()),
  fetch("\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x70\x75\x70\x70\x65\x74\x5f\x73\x70\x72\x69\x74\x65\x2e\x6a\x73\x6f\x6e").then(r => r.json())
]).then(([abbyData, puppetData]) => {

  frames2 = abbyData.sprites;
  frames3 = puppetData.sprites;

  img2.src = "\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x61\x62\x62\x79\x5f\x73\x70\x72\x69\x74\x65\x73\x68\x65\x65\x74\x2e\x70\x6e\x67";
  img3.src = "\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x70\x75\x70\x70\x65\x74\x5f\x73\x70\x72\x69\x74\x65\x73\x68\x65\x65\x74\x2e\x70\x6e\x67";

  Promise.all([
    new Promise(res => img2.onload = res),
    new Promise(res => img3.onload = res)
  ]).then(() => {

    // Abby Canvas Trigger //
    gsap.to(state2, {
      frame: frames2.length - 1,
      ease: "\x6e\x6f\x6e\x65",
      scrollTrigger: {
        trigger: "\x23\x61\x62\x62\x79\x5f\x63\x61\x6e\x76\x61\x73",
        start: "\x74\x6f\x70\x20\x35\x25",
        end: "\x62\x6f\x74\x74\x6f\x6d\x2b\x3d\x33\x30\x30\x30",
        pin: true,
        scrub: true
      },
      onUpdate: () => drawAbbyFrame(Math.floor(state2.frame))
    });

    // Puppet Canvas Trigger //
    gsap.to(state3, {
      frame: frames3.length - 1,
      ease: "\x6e\x6f\x6e\x65",
      scrollTrigger: {
        trigger: "\x23\x70\x75\x70\x70\x65\x74\x5f\x63\x61\x6e\x76\x61\x73",
        start: "\x74\x6f\x70\x20\x35\x25",
        end: "\x62\x6f\x74\x74\x6f\x6d\x2b\x3d\x36\x30\x30\x30\x70\x78",
        pin: true,
        scrub: true
      },
      onUpdate: () => drawPuppetFrame(Math.floor(state3.frame))
    });
});
   // FNAF 4 Scene //

let _LZuPX = new Image();
let _xoKMRD = new Image();
let _aysviK = new Image();

let _TrM = [];
let _djibUyl = [];
let _TEmjCc = [];

let _wWqeNFk = { frame: 0 };
let _AAAdKur = { frame: 0 };
let _NoJS = { frame: 0 };

function fnTxElzE(index) {
  const _euUbGLB = frames4[index];
  if (!f) return;

  const _ycxIk = document.getElementById("\x6d\x65\x6e\x75\x5f\x63\x61\x6e\x76\x61\x73");
  const _igSzRiAh = canvas4.getContext("\x32\x64");

  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  ctx4.drawImage(img4, f.x, f.y, f.width, f.height, 0, 0, canvas4.width, canvas4.height);
}
function fnacoGcY(index) {
  const _euUbGLB = frames5[index];
  if (!f) return;

  const _izOSQ = document.getElementById("\x62\x65\x64\x72\x6f\x6f\x6d\x5f\x63\x61\x6e\x76\x61\x73");
  const _kUCYqn = canvas5.getContext("\x32\x64", { willReadFrequently: true });

  ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
  ctx5.drawImage(img5, f.x, f.y, f.width, f.height, 0, 0, canvas5.width, canvas5.height);
}
function fnbNxrlEyF(index) {
  const _euUbGLB = frames6[index];
  if (!f) return;

  const _WqUAeHAY = document.getElementById("\x62\x69\x74\x65\x5f\x38\x37");
  const _IaMnejm = canvas6.getContext("\x32\x64", { willReadFrequently: true });

  ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
  ctx6.drawImage(img6, f.x, f.y, f.width, f.height, 0, 0, canvas6.width, canvas6.height);
}

Promise.all([
  fetch("\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x66\x6e\x61\x66\x34\x5f\x6d\x65\x6e\x75\x2e\x6a\x73\x6f\x6e").then(r => r.json()),
  fetch("\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x66\x6e\x61\x66\x34\x5f\x62\x65\x64\x72\x6f\x6f\x6d\x2e\x6a\x73\x6f\x6e").then(r => r.json()),
  fetch("\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x66\x6f\x78\x5f\x61\x6e\x64\x5f\x62\x72\x6f\x73\x2e\x6a\x73\x6f\x6e").then(r => r.json())
]).then(([menuData, bedroomData, biteData]) => {

  frames4 = menuData.sprites;
  frames5 = bedroomData.sprites;
  frames6 = biteData.sprites;

  img4.src = "\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x6d\x65\x6e\x75\x5f\x73\x70\x72\x69\x74\x65\x73\x68\x65\x65\x74\x2e\x70\x6e\x67";
  img5.src = "\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x62\x65\x64\x72\x6f\x6f\x6d\x5f\x73\x70\x72\x69\x74\x65\x73\x68\x65\x65\x74\x2e\x70\x6e\x67";
  img6.src = "\x2e\x2f\x41\x73\x73\x65\x74\x73\x2f\x73\x70\x72\x69\x74\x65\x73\x2f\x62\x69\x74\x65\x38\x37\x5f\x73\x70\x72\x69\x74\x65\x73\x68\x65\x65\x74\x2e\x70\x6e\x67";

  // WAIT FOR IMAGES PROPERLY
  Promise.all([
    new Promise(res => img4.onload = res),
    new Promise(res => img5.onload = res),
    new Promise(res => img6.onload = res)
  ]).then(() => {


   document.querySelectorAll("\x23\x6d\x65\x6e\x75\x5f\x63\x61\x6e\x76\x61\x73\x2c\x20\x23\x62\x65\x64\x72\x6f\x6f\x6d\x5f\x63\x61\x6e\x76\x61\x73\x2c\x20\x23\x62\x69\x74\x65\x5f\x38\x37")
  .forEach(c => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  });
let _SCtPfynb = null;

function fnLMeHY(section) {
  activeSection = section;
}
    const _YOMORpl = document.querySelectorAll("\x2e\x70\x61\x6e\x65\x6c\x32\x2c\x20\x2e\x72\x69\x67\x68\x74\x5f\x73\x69\x64\x65\x2c\x20\x2e\x6c\x65\x66\x74\x5f\x73\x69\x64\x65").length;

const _QvBr = gsap.timeline({
  scrollTrigger: {
    trigger: "\x23\x66\x6e\x61\x66\x5f\x34",
    start: "\x74\x6f\x70\x20\x74\x6f\x70\x2b\x3d\x33\x35\x70\x78",
    end: () => "\x2b\x3d" + window.innerWidth * panels * 2,
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});

tl.to("\x2e\x74\x72\x61\x63\x6b\x32", {
  xPercent: -75,
  ease: "\x6e\x6f\x6e\x65"
});
let _CkWP = -1;

gsap.to(state4, {
  frame: frames4.length - 1,
  duration: 5,
  ease: "\x6e\x6f\x6e\x65",
  scrollTrigger: {
    trigger: "\x23\x6d\x65\x6e\x75\x5f\x63\x61\x6e\x76\x61\x73",
   toggleActions: "\x70\x6c\x61\x79\x20\x70\x61\x75\x73\x65\x20\x72\x65\x73\x75\x6d\x65\x20\x72\x65\x73\x65\x74",
  },
  onUpdate: () => {
    const _xrMyni = Math.floor(state4.frame);
    if (frame !== lastFrame4) {
      lastFrame4 = frame;
      requestAnimationFrame(() => drawMenuFrame(frame));
    }
  }
});
let _IMn = false;
let _yto = -1;

gsap.to(state5, {
  frame: frames5.length - 1,
  duration: 10,
  ease: "\x6e\x6f\x6e\x65",
  scrollTrigger: {
    containerAnimation: tl,
    trigger: "\x23\x62\x65\x64\x72\x6f\x6f\x6d\x5f\x63\x61\x6e\x76\x61\x73",
     toggleActions: "\x70\x6c\x61\x79\x20\x70\x61\x75\x73\x65\x20\x72\x65\x73\x75\x6d\x65\x20\x72\x65\x73\x65\x74",
  },
  onUpdate: () => {
    const _xrMyni = Math.floor(state5.frame);
    if (frame !== lastFrame5 && !ticking) {
      lastFrame5 = frame;
      ticking = true
      requestAnimationFrame(() => drawBedroomFrame(frame));
      ticking = false;
    }
  }
});

let _ZQf = -1;

gsap.to(state6, {
  frame: frames6.length - 1,
  duration: 10,
  ease: "\x6e\x6f\x6e\x65",
  scrollTrigger: {
    containerAnimation: tl,
    trigger: "\x23\x62\x69\x74\x65\x5f\x38\x37",
     toggleActions: "\x70\x6c\x61\x79\x20\x70\x61\x75\x73\x65\x20\x72\x65\x73\x75\x6d\x65\x20\x72\x65\x76\x65\x72\x73\x65",
  },
  onUpdate: () => {
    const _xrMyni = Math.floor(state6.frame);
    if (frame !== lastFrame6) {
      lastFrame6 = frame;
      requestAnimationFrame(() => drawBite87Frame(frame));
    }
  }
});
    ScrollTrigger.refresh();
  });
  console.log("\x46\x4e\x41\x46\x20\x34\x20\x6c\x6f\x61\x64\x65\x64");
});
ScrollTrigger.config({
  limitCallbacks: true
});
});
});