const toggleButton = document.querySelector('.topnav__hamburger-icon')
const closeMenu = document.querySelector('.fa-times')
const mobileMenu = document.querySelector('.topnav__mobile-menu')
const image = document.querySelector('.banner__image')
const bannerHeader = document.querySelector('.banner__paragraph-header')
const bannerParagraph = document.querySelector('.banner__paragraph-description')
const footerButton = document.querySelectorAll('.footer__list-header')
const footerWrapper = document.querySelector('.footer__grid-item')
const filterCategoryBtn = document.querySelector('.button__mobile-filter-menu')
const filterPriceBtn = document.querySelector('.button__price-filter-btn')
const priceFilterList = document.querySelectorAll('.button__price-filter-card ul')
const dene = document.querySelector('.button__filter-price-by-range-item')

filterCategoryBtn.addEventListener('click', (e) => {
    let target = e.target.classList
    if (innerWidth < 800) {
        if (target && target.contains('fas') || e.target.nextElementSibling.classList.toggle('isactive')) {
            e.target.parentElement.nextElementSibling.classList.toggle('isactive')
        }
    }
})

filterPriceBtn.addEventListener('click', () => {
    if (innerWidth < 800) {
        priceFilterList.forEach(list => {
            list.classList.toggle('isactive')
        })
    }
})

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active-mobil-menu')
})

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active-mobil-menu')
})

window.addEventListener('DOMContentLoaded', () => {
    image.style.transform = "translateX(0%)"
    bannerHeader.style.transform = "translateX(0%)"
    bannerParagraph.style.transform = "translateX(0%)"
})

footerWrapper.addEventListener('click', showFooter)

function showFooter(e) {
    let target = e.target.nextElementSibling
    if (target && target.classList && target.classList.contains('footer__list') && innerWidth <= 450) {
        target.classList.toggle('visible')
    }
}

window.addEventListener("scroll", (event) => {
    const backDiv = document.getElementById('go-back')
    let scroll = this.scrollY;
    console.log(backDiv);
    if (scroll >= 726) {
        backDiv.style.opacity = "1"
    } else {
        backDiv.style.opacity = "0"
    }
});