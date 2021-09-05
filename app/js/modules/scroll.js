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
    const menuLinks = document.querySelectorAll('[data-scroll]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', menuLinkClick)
        })
        function menuLinkClick(e) {
            const menuLink = e.target
            if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
                const goToBlock = document.querySelector(menuLink.dataset.scroll)
                const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
                window.scrollTo({
                    top: goToBlockValue,
                    behavior: 'smooth'
                })
                e.preventDefault()
            }
        }
    }
    console.log(menuLinks)
}
export default scroll