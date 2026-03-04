
const about_title = document.querySelector("#about_title")
const about_line = document.querySelector("#about_line")
const container = document.querySelector("#about_container")

gsap.to("#about_title", {
  scale: 0.4,
  y: container.offsetTop - (about_title.offsetTop + about_title.offsetHeight * 0.4),
  ease: "none",
  scrollTrigger: {
    trigger: "#about_page",
    start: "top-=50 top",
    endTrigger: "#about_container",
    end: "bottom-=100 bottom",
    scrub: true
  }
})

gsap.to("#about_line", {
    width: "100%",          
    y: container.offsetTop - (about_line.offsetTop + about_line.offsetHeight * 0.4),
    ease: "none",
    scrollTrigger: {
    trigger: "#about_page",
    start: "top-=50 top",
    endTrigger: "#about_container",
    end: "bottom-=100 bottom",
    scrub: true
  }
})

