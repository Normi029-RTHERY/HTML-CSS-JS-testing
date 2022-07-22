const vignettes = document.querySelector('.vignette-grid').querySelectorAll('.vignette')
// console.log(container)
// console.log(vignettes)

function getRdmColor() {
    return Math.floor(Math.random() * 361)
}

vignettes.forEach(e => {
    e.style.setProperty('--rdmHue', getRdmColor())
})

// const container = document.querySelector('.vignette-grid')
// const vignettes = container.querySelectorAll('.vignette')