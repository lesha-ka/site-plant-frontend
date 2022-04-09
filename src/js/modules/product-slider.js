export function getProductSlider() {
    $('.js-productsSlider').slick({
        infinite: false,
        variableWidth: true,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      });
}