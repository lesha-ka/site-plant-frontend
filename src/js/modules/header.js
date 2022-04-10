export const getHeader = () => {
    if(document.querySelector('.header')) {
        const search = document.querySelector('.js-SearchForm');
        const categories = document.querySelector('.js-categories');
        const categoryList = document.querySelector('.js-categoryList');
        function showCategories() {
            search.classList.toggle('header-search-active');
            categories.classList.toggle('header-categories-active');
            categoryList.classList.toggle('js-block');
        }
        function hideCategories() {
            search.classList.remove('header-search-active');
            categories.classList.remove('header-categories-active');
            categoryList.classList.remove('js-block');
        }
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                hideCategories()
            }
        });
        document.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(categories);
            if ( ! withinBoundaries ) {
                hideCategories()            
            }
        })
        categories.addEventListener("click", showCategories);
    }
}