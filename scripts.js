const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburgers')
const lines = document.querySelectorAll('.hamburger')

hamburger.addEventListener('click', () => {
    if (!menu.classList.contains('slideIn') && 
        !lines[0].classList.contains('tipDown') && 
        !lines[1].classList.contains('fadeOut') && 
        !lines[2].classList.contains('tipUp')) {
            menu.classList.remove('slideOut')
            lines[0].classList.remove('revTipDown')
            lines[1].classList.remove('fadeIn')
            lines[2].classList.remove('revTipUp')

            menu.classList.add('slideIn')
            lines[0].classList.add('tipDown')
            lines[1].classList.add('fadeOut')
            lines[2].classList.add('tipUp')
    } else {
        menu.classList.remove('slideIn')
        lines[0].classList.remove('tipDown')
        lines[1].classList.remove('fadeOut')
        lines[2].classList.remove('tipUp')

        menu.classList.add('slideOut')
        lines[0].classList.add('revTipDown')
        lines[1].classList.add('fadeIn')
        lines[2].classList.add('revTipUp')
    }
})