const vignettes = document.querySelectorAll('.vignette')

function getRdmColor() {
    let rdmColor = Math.floor(Math.random() * 361);
    console.log(rdmColor);
    return rdmColor;
}

vignettes.forEach(e => {
    e.style.var(--rdmHue) = getRdmColor()
})