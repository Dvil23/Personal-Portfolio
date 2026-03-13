



let img_container= document.querySelector('#about_img_container')
let img= img_container.querySelector('img')
let shadow= document.querySelector('#about_shadow')

//Floating animation to image and shadow
let idle_animation= gsap.timeline({ repeat: -1, yoyo: true })

idle_animation.to(img, {
    y: -6,
    duration: 2.5,
    ease: "sine.inOut"
})

idle_animation.to(shadow, {
    scale: 1.15,
    opacity: 0.2,
    duration: 2.5,
    ease: "sine.inOut"
}, 0)

//Pause floating animation when the moving animation is taking place
img_container.addEventListener('mouseenter', () => {
    idle_animation.pause()
})


//Creating a 3D effect by moving the image and shadow according to the mouse position 
img_container.addEventListener('mousemove', e => {
    let rect = img_container.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top

    let center_x = rect.width / 2
    let center_y = rect.height / 2

    let rotate_y = (x - center_x) / 35
    let rotate_x = (center_y - y) / 35


    gsap.to(img, {
        rotateY: rotate_y,
        rotateX: rotate_x,
        scale: 1.01,
        transformOrigin: "center",
        duration: 0.1,
        ease: "power2.out"
    })

    //Shadow movement animation
    let shadowX = (x - center_x) / 40
    let shadowY = (y - center_y) / 60

    //Deform shadow
    let scaleX = 1 + Math.abs(rotate_y) / 40
    let scaleY = 1 - Math.abs(rotate_x) / 60

    gsap.to(shadow, {
        x: shadowX,
        y: shadowY,
        scaleX: scaleX,
        scaleY: scaleY,
        rotate: -rotate_y * 0.6,
        rotateX: rotate_x * 0.2,
        duration: 0.2,
        ease: "power2.out"
    })
})

//Stop 3D effect and resume floating animation
img_container.addEventListener('mouseleave', () => {

    gsap.to(img, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.inOut"
    })

    gsap.to(shadow, {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        rotate: 0,
        duration: 0.4,
        ease: "power2.out"
        })

    idle_animation.resume()

})
