function wrapperFixPosition() {
    const fixBlocks = document.querySelectorAll('.js-fixBlock');
    let paddingOffset = window.innerWidth - document.querySelector('.js-wrapper').offsetWidth + 'px'; 
    setTimeout( function() {
        if ( !document.querySelector('.js-wrapper').hasAttribute('wrapper-body-scroll-fix') ) {
            let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            fixBlocks.forEach((el) => {
                el.style.paddingRight = paddingOffset;
            });
            document.querySelector('.js-wrapper').style.overflow = 'hidden';
            document.querySelector('.js-wrapper').setAttribute('wrapper-body-scroll-fix', scrollPosition);
            document.querySelector('.js-wrapper').style.overflow = 'hidden';
            document.querySelector('.js-wrapper').style.position = 'fixed';
            document.querySelector('.js-wrapper').style.top = '-' + scrollPosition + 'px';
            document.querySelector('.js-wrapper').style.left = '0';
            document.querySelector('.js-wrapper').style.width = '100%';
            document.querySelector('.js-wrapper').style.paddingRight = paddingOffset;
        }
    }, 15 ); 
}
function wrapperUnfixPosition() {
    const fixBlocks = document.querySelectorAll('.js-fixBlock');
    if ( document.querySelector('.js-wrapper').hasAttribute('wrapper-body-scroll-fix') ) {
        let scrollPosition = document.querySelector('.js-wrapper').getAttribute('wrapper-body-scroll-fix');
        document.querySelector('.js-wrapper').removeAttribute('wrapper-body-scroll-fix');
        document.querySelector('.js-wrapper').style.overflow = '';
        document.querySelector('.js-wrapper').style.position = '';
        document.querySelector('.js-wrapper').style.top = '';
        document.querySelector('.js-wrapper').style.left = '';
        document.querySelector('.js-wrapper').style.width = '';
        window.scroll(0, scrollPosition);
        fixBlocks.forEach((el) => {
              el.style.paddingRight = '0px';
          });
        document.querySelector('.js-wrapper').style.paddingRight = '0px';
    }
}
export { wrapperFixPosition, wrapperUnfixPosition };