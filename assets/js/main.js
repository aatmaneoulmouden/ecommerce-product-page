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


// Update QTY
function handleQty() {
    const qty = document.querySelector('#qty');
    const addBtn = document.querySelector('#qty-plus');
    const minusBtn = document.querySelector('#qty-minus');

    addBtn.addEventListener('click', () => {
        qty.value++;
    });

    minusBtn.addEventListener('click', () => {
        if (qty.value > 0) {
            qty.value--;
        }
    });
}

handleQty();


// Open/close the lightbox
function lightboxHandler() {
    const openLightboxBtns = document.querySelectorAll('.productImagesPreview .swiper-slide');
    const closeLightboxBtn = document.querySelector('#close-lightbox');
    const lightbox = document.querySelector('#lightbox');

    // Open lightbox
    openLightboxBtns.forEach(slide => {
        slide.addEventListener('click', () => {
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
        });
    });

    // Close lightbox
    closeLightboxBtn.addEventListener('click', () => {
        lightbox.classList.remove('flex');
        lightbox.classList.add('hidden');
    });
}

lightboxHandler();


// Mobile product gallery
var swiper = new Swiper(".mobileProductGallery", {
    navigation: {
        nextEl: ".product-swiper-button-next",
        prevEl: ".product-swiper-button-prev",
    },
});

// Desktop product gallery
var productThumbnailSwiper = new Swiper(".productThumbnailSwiper", {
    spaceBetween: 28,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var productImagesPreview = new Swiper(".productImagesPreview", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: productThumbnailSwiper,
    },
});


// Lightbox swiper
var lightboxThumbnails = new Swiper(".lightboxThumbnails", {
    spaceBetween: 28,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var lightboxPreview = new Swiper(".lightboxPreview", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-lightbox-next",
        prevEl: ".swiper-lightbox-prev",
    },
    thumbs: {
        swiper: lightboxThumbnails,
    },
});