let items = document.querySelectorAll(".carrousel_item")
let current = 0
let interval = null

function carr_update() {
    items.forEach(item => {
        item.classList.remove("active", "left", "right")
    })

    //get index for the items on the carrousel and add styles
    let left = (current - 1 + items.length) % items.length
    let center = current
    let right = (current + 1) % items.length

    items[center].classList.add("active")
    items[left].classList.add("left")
    items[right].classList.add("right")
}

function carr_next_item() {
    current = (current + 1) % items.length
    carr_update()
}

function carr_prev_item() {
    current = (current - 1 + items.length) % items.length
    carr_update()
}

function carr_start() {
    clearInterval(interval)
    interval = setInterval(carr_next_item, 2500)
}

function carr_stop() {
    clearInterval(interval)
}

carr_update()
carr_start()

//pause carrousel when hovering over item 
let carrousel_cont = document.querySelector(".carrousel_container")
carrousel_cont.addEventListener("mouseenter", carr_stop)
carrousel_cont.addEventListener("mouseleave", carr_start)

items.forEach((item, index) => {
    item.addEventListener("click", () => {

        let left = (current - 1 + items.length) % items.length
        let right = (current + 1) % items.length

        carr_stop() 

        if (index === right) {
            carr_next_item()

        }else if (index === left){
            carr_prev_item()
        }

        carr_start() 
    })
})