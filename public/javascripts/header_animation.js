gsap.registerPlugin(ScrollTrigger)

let h_index = document.querySelector('#index')
let h_cont = document.querySelector('#header_container')

//Putting the header bigger for the initial appareance
gsap.set(h_index, {
    width: '70%',
})

gsap.set(h_cont, {
    top: '2vh',
    
})

//Making the header smaller, with a border and background
gsap.to(h_index, {
    width: '50%',
    duration: 0.5,
    border: '2px solid #FFFFFF ',
    backdropFilter:' blur(5px)',
    backgroundColor:' #4d4a4a3f',
    ease: "easeInOut",
    scrollTrigger: {
        trigger: "#about_page",
        start: "top bottom",
        toggleActions: "play none none reverse"
    }

})

gsap.to(h_cont, {
    top: '0vh',
    
    duration: 0.5,
    ease: "easeIn",
    scrollTrigger: {
        trigger: "#about_page",
        start: "top bottom",
        toggleActions: "play none none reverse"
    }
})
