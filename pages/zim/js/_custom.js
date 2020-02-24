// document.addEventListener("DOMContentLoaded", function () {
//
//     // Custom JS
//
//
//     const openModalButton = document.querySelectorAll('[data-modal-target]');
//     const closeModalButton = document.querySelectorAll('[data-close-button]');
//     const overlay = document.getElementById('overlay');
//
//     openModalButton.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = document.querySelector(button.dataset.modalTarget);
//             openModal(modal);
//         })
//     });
//
//     overlay.addEventListener('click', () => {
//         const modal = document.querySelectorAll('.modal.active');
//         modal.forEach(modal => {
//             closeModal(modal);
//         })
//     });
//
//     closeModalButton.forEach(button => {
//         button.addEventListener('click', () => {
//             const modal = button.closest('.modal');
//             closeModal(modal);
//         })
//     });
//
//     function openModal(modal) {
//         if (modal == null) return;
//
//         modal.classList.add('active');
//         overlay.classList.add('active');
//     }
//
//     function closeModal(modal) {
//         if (modal == null) return;
//         modal.classList.remove('active');
//         overlay.classList.remove('active');
//
//     }
//
//
//
//
//
// });


// let filter = new Filters(data, {filterViewBlock: "#filter-view"});

//
// $(document).ready(function () {
//     //initialize swiper when document ready
//     var mySwiper = new Swiper ('.swiper-container', {
//         // Optional parameters
//         direction: 'horizontal',
//         slidesPerView: 1,
//         spaceBetween: 10,
//         // init: false,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//
//     })
// });


<!-- Initialize Swiper -->
var mainSwiper = new Swiper('.swiper-container.main', {


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

var aboutSwiper = new Swiper('.swiper-container.about', {


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

//=== NAV BAR MENU
$('[data-toggle-menu]').click(function () {
    // console.log('lol');
    $('.menu-mobile').toggleClass('active');
});


$('.md-select').on('click', function () {
    $(this).toggleClass('active')
});

$('.md-select ul li').on('click', function () {
    var v = $(this).text();
    $('.md-select ul li').not($(this)).removeClass('active');
    $(this).addClass('active');
    $('.md-select label button').text(v)
});


