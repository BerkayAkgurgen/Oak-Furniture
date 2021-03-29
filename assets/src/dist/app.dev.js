"use strict";

var toggleButton = document.querySelector('.topnav__hamburger-icon');
var closeMenu = document.querySelector('.fa-times');
var mobileMenu = document.querySelector('.topnav__mobile-menu');
var image = document.querySelector('.banner__image');
var bannerHeader = document.querySelector('.banner__paragraph-header');
var bannerParagraph = document.querySelector('.banner__paragraph-description');
var footerButton = document.querySelectorAll('.footer__list-header');
var footerWrapper = document.querySelector('.footer__grid-item');
var filterCategoryBtn = document.querySelector('.card__mobile-filter-menu');
var filterPriceBtn = document.querySelector('.card__price-filter-btn');
var priceFilterList = document.querySelectorAll('.card__price-filter-card ul');
filterCategoryBtn.addEventListener('click', function (e) {
  var target = e.target.classList;

  if (innerWidth < 800) {
    if (target && target.contains('fas') || e.target.nextElementSibling.classList.toggle('isactive')) {
      e.target.parentElement.nextElementSibling.classList.toggle('isactive');
    }
  }
});
filterPriceBtn.addEventListener('click', function () {
  if (innerWidth < 800) {
    priceFilterList.forEach(function (list) {
      list.classList.toggle('isactive');
    });
  }
});
toggleButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('active-mobil-menu');
});
closeMenu.addEventListener('click', function () {
  mobileMenu.classList.remove('active-mobil-menu');
});
window.addEventListener('DOMContentLoaded', function () {
  image.style.transform = "translateX(0%)";
  bannerHeader.style.transform = "translateX(0%)";
  bannerParagraph.style.transform = "translateX(0%)";
});
footerWrapper.addEventListener('click', showFooter);

function showFooter(e) {
  var target = e.target.nextElementSibling;
  console.log(target);

  if (target && target.classList && target.classList.contains('footer__list') && innerWidth <= 450) {
    target.classList.toggle('visible');
  }
}