export const getCatalogView = () => {
    if(document.querySelector('.js-catalogGrid')) {
        let btnTable = document.querySelector('.js-catalogTable');
        let btnGrid = document.querySelector('.js-catalogGrid');
        let catalogWrapper = document.querySelector('.js-catalogWrapper');
        btnTable.addEventListener('click', function() {
            btnGrid.classList.add('control-btn-inactive');
            btnTable.classList.remove('control-btn-inactive');
            catalogWrapper.classList.remove('catalog-cards-grid');
        });
        btnGrid.addEventListener('click', function() {
            btnGrid.classList.remove('control-btn-inactive');
            btnTable.classList.add('control-btn-inactive');
            catalogWrapper.classList.add('catalog-cards-grid');
        });
    }
}