const burger = () => {
    const burger = document.querySelector("#navToggle");
    const nav = document.querySelector('.nav')
    const navLink = document.querySelectorAll('.nav__link')
    const docBtn = document.querySelector('.header__btn')
    burger.addEventListener("click", function (event) {
        event.preventDefault();
        burger.classList.toggle("active");
        nav.classList.toggle("seen");
        if (nav.classList.contains('seen') && burger.classList.contains("active")) {
            marginHeader()
        } else {
            marginDownHeader()
        }
    });
    navLink.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('seen')
            burger.classList.remove("active");
        })
    })
    docBtn.addEventListener('click', () => {
        nav.classList.remove('seen')
        burger.classList.remove("active");
    })
    function marginHeader() {
        const headerTop = document.querySelector('.headertop').style.marginTop = "350px";

    }
    function marginDownHeader() {
        const headerTop = document.querySelector('.headertop').style.marginTop = "120px";

    }
}
export default burger