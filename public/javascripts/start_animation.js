let names= document.querySelectorAll('#name_title h1')

//split letters into individual spans
names.forEach(name => {
    let text = name.textContent
    name.innerHTML = ''
    text.split('').forEach(l => {
        let span = document.createElement('span')
        span.className = 'letter'
        span.textContent = l
        name.appendChild(span)
    })
})

let letters = document.querySelectorAll('.letter')



//START OF ANIMATION

let title_tl = gsap.timeline()

//set letters where you can see them at first and not visible
gsap.set(letters, { y: 200, opacity: 0 })


//putting them visible and start animation
title_tl.set(letters, { 
    y: 200, 
    opacity: 1,
    ease: 'power3.out', 
    stagger: 0.04 
})


title_tl.to(letters, {
    
    keyframes: [
        { y: -15, duration: 0.4, ease: 'power3.out' },  //letters go up too high for bounce effect
        { y: 0, duration: 0.2, ease: 'power2.inOut' }   //letters go down to final position
    ],

    stagger: 0.08, //seconds of delay between each letter

    //Make the letters hoveable with a bounce effect when the first animation ends
    onComplete: () => {
        letters.forEach(letter => {
            letter.addEventListener('mouseenter', () => {
                gsap.to(letter, { 
                    y: -10, 
                    duration: 0.2, 
                    ease: 'power2.out' 
                })
            })
            letter.addEventListener('mouseleave', () => {
                gsap.to(letter, { 
                    y: 0, 
                    duration: 0.2, 
                    ease: 'power2.inOut' 
                })
            })
        })
    }
})