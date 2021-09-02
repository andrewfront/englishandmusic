const scroll = () => {
    let prevscrollPoss = window.pageYOffset
    window.onscroll = function() {
        const navBar = document.querySelector('.header')
        let currentscrollPos = window.pageYOffset
        if (prevscrollPoss > currentscrollPos) {
            navBar.classList.add('fixed')
        } else {
            navBar.classList.remove('fixed')
        }
        prevscrollPoss = currentscrollPos
    }
    window.addEventListener('scroll', () => {
        const navBar = document.querySelector('.header')
        const scrollHeight = window.pageYOffset
        if (scrollHeight < 550) {
            navBar.classList.remove('fixed')
        }
    })
    const headerLogo = document.querySelector('.header__logo')
    headerLogo.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
}
export default scroll