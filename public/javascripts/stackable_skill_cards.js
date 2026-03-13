

let skills = gsap.utils.toArray('.skill_item') 
let skills_cont = document.getElementById('skills_container') 

// Timeline to animate the skill cards
let tl_cards = gsap.timeline({
    scrollTrigger: {
        trigger: '#skills_page',
        start: 'top top',
        end: () => '+=' + (window.innerHeight * skills.length),
        scrub: true,
        pin: true,
        anticipatePin: 1
        
  },

//   onComplete: function() {
//     this.kill(); 
//   }

})


var rect = window.getComputedStyle(skills_cont, null).getPropertyValue("height")

skills.forEach((skill, i) => {
    if (i!==0){
        tl_cards.to(skill, {
            top: () => (i*7) + 'vh',
            ease: 'none'
        })
    } 
  
})

