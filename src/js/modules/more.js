export const getMore = () => {
    if(document.querySelector('.js-moreBox')) {
      let moreBox = document.querySelectorAll('.js-moreBox');
      moreBox.forEach(function(elem) {
        let moreBoxMaxHeight = getComputedStyle(elem).maxHeight;
        moreBoxMaxHeight = parseInt(moreBoxMaxHeight, 10);
        let moreBoxHeight = elem.scrollHeight;
        let btnMore = elem.nextElementSibling ; 
        if (moreBoxHeight > moreBoxMaxHeight) {
            btnMore.classList.add('js-block')
        } else {
            btnMore.classList.add('js-hide')
        }
        function showMore() {
            if (btnMore.classList.contains('js-lessText')) {
                elem.style.maxHeight = '';
                btnMore.innerHTML = 'Показать ещё';
                btnMore.classList.remove('js-lessText')
            } else {
                elem.style.maxHeight = 'initial';
                elem.classList.add('open');
                btnMore.innerHTML = 'Скрыть';
                btnMore.classList.add('js-lessText')
            }
        }
        btnMore.addEventListener("click", showMore);
      })
    }
}