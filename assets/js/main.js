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
        if (qty.value > 1) {
            qty.value--;
        }
    });
}

handleQty();

/**
 * CART : Add items and remove them
 */
const cartIsEmptyMsg = document.querySelector('#cart-is-empty');
const cartProductsWrapper = document.querySelector('#cart-products');

const cart = {
    'hasItem': false,
    'itemsCount': 0,
    'singlePrice': 0,
}


const hideProductShowMessage = () => {
    // Show empty cart message
    cartIsEmptyMsg.classList.remove('hidden');
    cartIsEmptyMsg.classList.add('block');

    // Hide cart products
    cartProductsWrapper.classList.remove('block');
    cartProductsWrapper.classList.add('hidden');
};

const showProductHideMessage = () => {
    // Hide empty cart message
    cartIsEmptyMsg.classList.remove('block');
    cartIsEmptyMsg.classList.add('hidden');

    // Show cart products
    cartProductsWrapper.classList.remove('hidden');
    cartProductsWrapper.classList.add('block');
};

// Add item to cart
function addToCart() {
    const addToCartBtn = document.querySelector('#add-to-cart-btn');
    const qty = document.querySelector('#qty');
    const currentSinglePrice = document.querySelector('#current-price span');
    const cartSinglePricePlaceholder = document.querySelector('#single-price');
    const cartQtyPlaceholder = document.querySelector('#cart-qty');
    const cartTotalPricePlaceholder = document.querySelector('#total-price');

    addToCartBtn.addEventListener('click', () => {
        cart.hasItem = true;
        cart.singlePrice = parseFloat(currentSinglePrice.textContent).toFixed(2);
        cart.itemsCount = parseInt(qty.value);

        let { singlePrice, itemsCount } = cart;

        cartSinglePricePlaceholder.textContent = "$" + singlePrice;
        cartQtyPlaceholder.textContent = "x" + itemsCount;

        let totalPrice = (singlePrice * itemsCount).toFixed(2);

        cartTotalPricePlaceholder.textContent = "$" + totalPrice;

        showProductHideMessage();
    });
}

addToCart();

// Delete item from cart
function removeItem() {
    const deleteItemBtn = document.querySelector('#delete-product');

    deleteItemBtn.addEventListener('click', () => {
        cart.hasItem = false;
        hideProductShowMessage();
    });
}

removeItem();

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