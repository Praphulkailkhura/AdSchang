let animation = lottie.loadAnimation({
  container: document.getElementById('lottie-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animations/VUI Animation.json'
});

gsap.from("#lottie-animation", {
  y: -1200,
  duration: 2,
  delay: 1
})

gsap.from("#lottie-loader", {
  y: -1400,
  duration: 1,
})

lottie.loadAnimation({
  container: document.getElementById('lottie-loader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animations/Loading Bloob.json'
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.remove();
    }, 600);
  }, 2000);
});

window.addEventListener("DOMContentLoaded", () => {
  const cursorContainer = document.getElementById("lottie-cursor");

  const animation1 = lottie.loadAnimation({
    container: cursorContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animations/Fluid Loading Animation.json"
  });

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate1() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    cursorContainer.style.left = `${currentX}px`;
    cursorContainer.style.top = `${currentY}px`;
    requestAnimationFrame(animate1);
  }

  animate1();
});

gsap.from("#left h3", {
  x: -1200,
  duration: 3,
  delay: 1
})

gsap.from("#right h1", {
  y: 1200,
  duration: 3,
  delay: 1,
})

gsap.to(".about-content h1", {
  transform: "translateX(-250%)",
  scrollTrigger: {
    trigger: ".about-content",
    scroller: "body",
    start: "top 40%",
    end: "top -200%",
    scrub: 2,
    pin: true
  }
})

gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".card");

cards.forEach((card, i) => {
  gsap.set(card, {
    zIndex: cards.length - i,
    rotate: -6 * i,
    yPercent: 0,
  });
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#services-right",
    start: "top top",
    end: "+=" + cards.length * 500,
    scrub: true,
    pin: true,
    markers: false
  }
});

cards.forEach((card, i) => {
  timeline.to(card, {
    yPercent: -180,
    rotate: 15,
    ease: "power2.out"
  }, i * 0.6);
});

gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".card-section");
const cards1 = gsap.utils.toArray(".weekly-card");
const cardWidth = cards1[0].offsetWidth + 60;

gsap.to(track, {
  x: () => `-${(cardWidth * cards1.length) - window.innerWidth + 100}`,
  ease: "none",
  scrollTrigger: {
    trigger: ".weekly-articles",
    pin: true,
    scrub: 1,
    start: "top top",
    end: () => `+=${cardWidth * cards1.length}`
  }
});

