export function getProductSlider() {
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
    $('.js-reviewsSlider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        focusOnSelect: true,
        variableHeight: false
    });
    $('.js-productsSlider').slick({
        infinite: false,
        variableWidth: true,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              variableWidth: false,
              slidesToShow: 3,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              dots: false,
              arrows: false
            }
          }
        ]
      });
      $('.js-categoriesSlider').slick({
        responsive: [
            {
              breakpoint: 2048,
              settings: "unslick"
            },
            {
             breakpoint: 1024,
             settings: {
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false,
                dots: true
            }
          },
          {
           breakpoint: 575,
           settings: {
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false
          }
        }
        ]
        });
        $('.js-offerSlider').slick({
          responsive: [
              {
                breakpoint: 2048,
                settings: "unslick"
              },
              {
               breakpoint: 768,
               settings: {
                  infinite: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: false
              }
            },
          ]
          });
}