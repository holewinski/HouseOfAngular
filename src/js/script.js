//Variables
const hamburger = document.getElementById('hamburger'),
    menu = document.getElementById('menu'),
    banner = document.getElementById('banner'),
    formSelect = [...document.getElementsByClassName('form__select')],
    form = document.getElementById('form'),
    error = document.getElementById('error-message');
//Declaration of functions

function changeBanner() {
    let windowWidth = window.innerWidth;
    switch (true) {
        case windowWidth >= 768 && windowWidth < 1200:
            banner.src = "src/images/tablet_banner_photo.png";
            break;
        case windowWidth < 768:
            banner.src = "src/images/phone_banner_photo.png";
            break;
        default:
            banner.src = "src/images/desktop_banner_photo.png";
            break;

    }
}

function setClass(element, className) {
    const list = element.classList;
    list.contains(className) ? list.remove(className) : list.add(className);
}
function showError() {
    setClass(error, 'visible');
}

//Calling functions
formSelect.forEach(element => {

    const select = element.getElementsByTagName('select')[0],
        options = [...element.getElementsByTagName('option')],
        optionsContainer = document.createElement('div'),
        optionElement = document.createElement('div');

    optionsContainer.className = 'form__options';
    optionElement.className = 'form__option form__input';

    options.forEach((option, index) => {

        const optionNode = optionElement.cloneNode(true);
        optionNode.style.transitionDelay = `${0.1 * index}s`
        optionNode.onclick = () => {
            select.selectedIndex = option.index;
        };

        optionNode.innerText = option.innerText;
        optionsContainer.appendChild(optionNode);
    })
    element.appendChild(optionsContainer);
});
changeBanner();
hamburger.onclick = () => setClass(menu, 'show');
window.onclick = resize = () => changeBanner();
form.addEventListener('submit', e => {
    e.preventDefault();
    showError();
})
error.addEventListener('click', e => {
    e.target != error.firstElementChild ? showError() : null;
})

