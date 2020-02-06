//Variables
const hamburger = document.getElementById('hamburger'),
    menu = document.getElementById('menu'),
    banner = document.getElementById('banner');

//Declaration of functions

function changeBanner() {
    let windowWidth = window.innerWidth;
    switch (true) {
        case windowWidth >= 768 && windowWidth < 1200:
            console.log('tablet')
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

//Calling functions

changeBanner();
hamburger.addEventListener("click", () => setClass(menu, 'show'))
window.addEventListener("resize", () => changeBanner());
