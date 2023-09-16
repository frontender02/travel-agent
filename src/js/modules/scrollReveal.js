import ScrollReveal from 'scrollreveal'

function scrollRevealFunc(){
    ScrollReveal({
        distance: '60px',
        duration: 2800,
        // reset: true,
    })
    ScrollReveal().reveal(`.popular__title`, {
        origin: 'top',
    })
    ScrollReveal().reveal(`.discover__descr, .discover__picture-hint`, {
        origin: 'left',
    })
    ScrollReveal().reveal(`.discover__picture-scroll, .popular__controls`, {
        origin: 'right',
    })
    ScrollReveal().reveal(`.discover__picture-scroll, .discover__picture-img`, {
        origin: 'bottom',
    })
}

export default scrollRevealFunc