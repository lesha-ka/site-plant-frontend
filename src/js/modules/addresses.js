export const getAddresses = () => {
    if(document.querySelector('.js-addressesShow')) {
        let addressesShow = document.querySelectorAll('.js-addressesShow');
        addressesShow.forEach(function(elem) {
            let addressesItem = elem.closest('.js-addressesItem');
            let addressesHead = elem.closest('.js-addressesHead');
            let addressesDetails = addressesItem.querySelector('.js-addressesDetails')
            function open() {
                if (addressesDetails.classList.contains('js-block')) {
                    addressesHead.classList.remove('open');
                    addressesDetails.classList.remove('js-block');
                } else {
                    addressesDetails.classList.add('js-block');
                    addressesHead.classList.add('open');
                }
            }
            elem.addEventListener("click", open);
        });
    }
}