export const getHeader = () => {
    if(document.querySelector('.header')) {
        const search = document.querySelector('.js-SearchForm');
        const categories = document.querySelector('.js-categories');
        const categoryList = document.querySelector('.js-categoryList');
        const headerMenu = document.querySelector('.js-headerMenu');
        const menuInner = document.querySelector('.js-menuInner');
        const linkList = document.querySelector('.js-linkList');
        const linkItems = document.querySelector('.js-linkItems');
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
        function showMenu() {
            menuInner.classList.toggle('js-block');
            headerMenu.classList.toggle('header-burger-open');
        }
        function showLinkItems() {
            linkItems.classList.toggle('js-block');
            linkList.classList.toggle('menu-link-list-open');
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
        linkList.addEventListener("click", showLinkItems);
        headerMenu.addEventListener("click", showMenu);
        categories.addEventListener("click", showCategories);
    }
}