const burger = () => {
    const burger = document.querySelector("#navToggle")
    const nav = document.querySelector('.nav')
    const navLink = document.querySelectorAll('.nav__link')
    const docBtn = document.querySelector('.header__btn')
    const modal = document.querySelector('.modal')
    burger.addEventListener("click", function (event) {
        event.preventDefault()
        burger.classList.toggle("active")
        nav.classList.toggle("seen")
        modal.classList.remove('show')
        if (nav.classList.contains('seen')) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    });
    navLink.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('seen')
            burger.classList.remove("active")
            modal.classList.remove('show')
            document.body.style.overflow = ''
        })
    })
    docBtn.addEventListener('click', () => {
        nav.classList.remove('seen')
        burger.classList.remove("active")
    })
}
export default burger