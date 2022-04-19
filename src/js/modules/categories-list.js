export const getCategoriesList = () => {
    if(document.querySelector('.js-categoriesMenu')) {
        const categoriesMenu = document.querySelector('.js-categoriesMenu');
        const categoriesList = document.querySelector('.js-categoriesList');
        categoriesMenu.addEventListener('click', function(e) {
            categoriesMenu.classList.toggle('is-open')
            categoriesList.classList.toggle('js-block')
        });
        function hideCategoriesList() {
            categoriesMenu.classList.remove('is-open')
            categoriesList.classList.remove('js-block');
        }
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                hideCategoriesList()
            }
        });
        document.addEventListener( 'click', (e) => {
            let withinBoundaries = e.composedPath().includes(categoriesMenu);
            if ( ! withinBoundaries ) {
                hideCategoriesList()            
            }
        })
    }
}