gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".card-track");
const cards = gsap.utils.toArray(".card");
const cardWidth = cards[0].offsetWidth + 60;

gsap.to(track, {
  x: () => `-${(cardWidth * cards.length) - window.innerWidth + 100}`,
  ease: "none",
  scrollTrigger: {
    trigger: ".weekly-articles",
    pin: true,
    scrub: 1,
    start: "top top",
    end: () => `+=${cardWidth * cards.length}`
  }
});
