// Open and Close Mobile menu
function openColseMobileMenu() {
    const mobileMenu = document.querySelector('#mobile-menu');
    const openMenuBtn = document.querySelector('#open-menu');
    const closeMenuBtn = document.querySelector('#close-menu');

    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

openColseMobileMenu();


// Mobile product gallery
var swiper = new Swiper(".mobileProductGallery", {
    navigation: {
        nextEl: ".product-swiper-button-next",
        prevEl: ".product-swiper-button-prev",
    },
});