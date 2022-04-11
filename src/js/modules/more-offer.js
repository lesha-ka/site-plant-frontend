export const getMoreOffer = () => {
    if(document.querySelector('.js-offersBox')) {
      let offersBox = document.querySelector('.js-offersBox');
      let offersBoxMaxHeight = getComputedStyle(offersBox).maxHeight;
      offersBoxMaxHeight = parseInt(offersBoxMaxHeight, 10);
      let offersBoxHeight = offersBox.scrollHeight;
      let btnMore = document.querySelector('.js-moreOffer');
      if (offersBoxHeight > offersBoxMaxHeight) {
          btnMore.classList.add('js-block')
      }
      function showMoreText() {
          if (btnMore.classList.contains('js-lessText')) {
              offersBox.classList.remove('offers-cards-open')
              btnMore.innerHTML = 'Показать ещё';
              btnMore.classList.remove('js-lessText')
          } else {
              offersBox.classList.add('offers-cards-open')
              btnMore.innerHTML = 'Скрыть';
              btnMore.classList.add('js-lessText')
          }
      }
      btnMore.addEventListener("click", showMoreText);
    }
}