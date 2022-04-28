export const getCatalogControl = () => {
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
    if(document.querySelector('.js-catalogFilterBtn')) {
        let catalogFilter = document.querySelector('.js-catalogFilter');
        let catalogFilterBtn = document.querySelector('.js-catalogFilterBtn');
        let filterClose = document.querySelector('.js-filterClose');
        catalogFilterBtn.addEventListener('click', function() {
            catalogFilter.classList.add('open');
        });
        filterClose.addEventListener('click', function() {
            catalogFilter.classList.remove('open');
        });
    }
    if(document.querySelector('.js-filterShow')) {
        let filterShow = document.querySelectorAll('.js-filterShow');
        filterShow.forEach(function(elem) {
            let filterOpen = elem;
            let inputs = elem.nextElementSibling ; 
            function open() {
                if (inputs.classList.contains('js-block')) {
                    filterOpen.classList.remove('open');
                    inputs.classList.remove('js-block');
                } else {
                    inputs.classList.add('js-block');
                    filterOpen.classList.add('open');
                }
            }
            filterOpen.addEventListener("click", open);
        });
    }
}