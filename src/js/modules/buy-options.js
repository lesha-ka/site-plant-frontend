export const getBuyOptions = () => {
    if(document.querySelector('.js-buyOptions')) {
        const buyOptions = document.querySelector('.js-buyOptions');
        const buyOptionsList = document.querySelector('.js-buyOptionsList');
        buyOptions.addEventListener('click', function(e) {
            buyOptions.classList.toggle('is-open')
            buyOptionsList.classList.toggle('js-block')
        });
        function hideBuyOptionst() {
            buyOptions.classList.remove('is-open')
            buyOptionsList.classList.remove('js-block');
        }
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                hideBuyOptionst()
            }
        });
        document.addEventListener( 'click', (e) => {
            let withinBoundaries = e.composedPath().includes(buyOptions);
            if ( ! withinBoundaries ) {
                hideBuyOptionst()            
            }
        })
    }
}