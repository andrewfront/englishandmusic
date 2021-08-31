const accordion = () => {

    const accordion = document.querySelector('.teachers__accordion');
    const items = accordion.querySelectorAll('li');
    const name = accordion.querySelectorAll('.teachers__status');
    function toggleAccordion() {
        const thisItem = this.parentNode;
        items.forEach(item => {
            if (thisItem == item) {
                thisItem.classList.toggle('teachers__open');
                return;
            }
            item.classList.remove('teachers__open');
        });
    }
    name.forEach(question => question.addEventListener('click', toggleAccordion));
}
export default accordion