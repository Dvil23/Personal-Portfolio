document.addEventListener("DOMContentLoaded", () => {
  let spotSection = document.querySelector("#page")
  let canvas = document.getElementById("spotlight-canvas")
  let ctx = canvas.getContext("2d")

  let mouseX = -999
  let mouseY = -999
  let slx = -999
  let sly = -999

  function resizeCanvas() {
    let r = spotSection.getBoundingClientRect()
    canvas.width = r.width
    canvas.height = r.height
  }

  resizeCanvas()
  window.addEventListener("resize", resizeCanvas)

  // Guardamos SIEMPRE la posición del mouse
  window.addEventListener("mousemove", e => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  // Cuando sale del área, ocultamos efecto
  spotSection.addEventListener("mouseleave", () => {
    mouseX = -999
    mouseY = -999
  })

  // Loop continuo (soluciona el problema del scroll)
  ;(function drawSpotlight() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (mouseX !== -999) {
      let r = spotSection.getBoundingClientRect()
      slx = mouseX - r.left
      sly = mouseY - r.top

      let g = ctx.createRadialGradient(slx, sly, 0, slx, sly, 260)
      g.addColorStop(0, "rgba(255, 237, 179, 0.06)")
      g.addColorStop(0.5, "rgba(255, 134, 94, 0.02)")
      g.addColorStop(1, "transparent")

      ctx.fillStyle = g
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    requestAnimationFrame(drawSpotlight)
  })()
})