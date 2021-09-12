const modal = () => {
const btn  = document.querySelector('.header__btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close')
const header = document.querySelector('.header')
let scroll = calcScroll()
btn.addEventListener('click', () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    if (header.classList.contains('fixed')) {
        header.classList.remove('fixed')
    }
    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = `${scroll}px`
})
function closeModal() {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
    document.body.style.marginRight = `0px`
}
closeBtn.addEventListener('click', closeModal)
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal()
    }
})
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal()
    }
})
function calcScroll() {
    let div = document.createElement('div')
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()
    return scrollWidth
}
}
export default modal