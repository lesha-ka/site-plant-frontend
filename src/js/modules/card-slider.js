export const getCardSlider = () => {    
    $('.js-gallary').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        asNavFor: '.js-cardSlider',
        arrows: false,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        variableHeight: true,
        fade: true        
    });
    $('.js-cardSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        vertical: false,
        dots: false,
        infinite: true,
        asNavFor: '.js-gallary',
        focusOnSelect: true,
        centerMode: false,
        variableWidth: true
    });
}