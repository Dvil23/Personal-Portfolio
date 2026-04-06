
gsap.registerPlugin(ScrollTrigger)

const about_title = document.querySelector("#about_title")
const about_line = document.querySelector("#about_line")
const container = document.querySelector("#about_container")


let start_responsive = window.innerWidth <= 800 ? "top-=200 top" : "top-=50 top"
let end_responsive = window.innerWidth <= 800 ? "bottom-=400 bottom" : "bottom-=100 bottom"
let scale_responsive = window.innerWidth <= 800 ? 0.7 : 0.4

//Animation where title and line get smaller and closer to the content
gsap.to("#about_title", {
  scale: scale_responsive,
  y: () => container.offsetTop - (about_title.offsetTop + about_title.offsetHeight * scale_responsive),
  ease: "none",
  scrollTrigger: {
    trigger: "#about_page",
    start: start_responsive,
    endTrigger: "#about_container",
    end: end_responsive,
    scrub: true,
    invalidateOnRefresh: true
  }
})

gsap.to("#about_line", {
  width: "100%",          
  y: () => container.offsetTop - (about_line.offsetTop + about_line.offsetHeight * scale_responsive),
  ease: "none",
  scrollTrigger: {
    trigger: "#about_page",
    start: start_responsive,
    endTrigger: "#about_container",
    end: end_responsive,
    scrub: true,
    invalidateOnRefresh: true
  }
})


