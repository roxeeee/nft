var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        1600: {
            slidesPerView: 5
        },
        1440: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 2
        },
        310: {
            slidesPerView: 1
        }
    },

});
