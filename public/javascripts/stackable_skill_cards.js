
let skills = gsap.utils.toArray('.skill_item')
let skills_cont = document.getElementById('skills_container')
let progress_bar = document.querySelector(".progress_line")

let offset = 7 // vh entre cards


let tl_cards = gsap.timeline({
    scrollTrigger: {
        
        trigger: '#skills_page',
        start: 'top top',
        end: () => '+=' + (window.innerHeight * skills.length),
        scrub: true,
        pin: true,
        anticipatePin: 1,


        onUpdate: (self) => {
            //height of last card
            let last_skill_height = (skills[skills.length - 1].offsetHeight) / window.innerHeight * 100
        
            gsap.set(progress_bar, {
                height: (self.progress * (last_skill_height + (offset * 3))) + "vh",
                 opacity: self.progress > 0 ? 1 : 0
            })
        }
    }
})



skills.forEach((skill, i) => {
    if (i!== 0){
        tl_cards.to(skill, {
            scale: () => 1 - (-i * 0.05),
            top: () => ((i+i/5) * offset ) + 'vh',
            ease: 'none'
        })
    }
})

let skills_items = document.querySelectorAll(".skill_item")

skills_items.forEach((skill, index) => {
    skill.addEventListener("click", () => {

        let st = tl_cards.scrollTrigger

        let scrollTarget = st.start + (st.end - st.start) * index / (skills.length - 1)

        gsap.to(window, {
            scrollTo: scrollTarget,
            duration: 0.8,
            ease: "power2.inOut"
        })
    })
})

