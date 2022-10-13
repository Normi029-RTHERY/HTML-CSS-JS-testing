function animateOpening() {
    console.log('hey')
    document.querySelector("main").setAttribute('style', 'animation: openingAnimation 200ms ease-in');
    setTimeout(function(){document.querySelector("main").setAttribute('style', 'clip-path: circle(100% at 50% 50%)');}, 190)
    
}