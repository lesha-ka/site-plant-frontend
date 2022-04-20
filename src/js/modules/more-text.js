export const getMoreText = () => {
    if(document.querySelector('.js-textBox')) {
        let textBox = document.querySelectorAll('.js-textBox');
        textBox.forEach(function(elem) {
            let infoTextMaxHeight = getComputedStyle(elem).maxHeight;
            infoTextMaxHeight = parseInt(infoTextMaxHeight, 10);
            let infoTextHeight = elem.scrollHeight;
            let btnMore = elem.closest('.js-textWrap').querySelector('.js-moreText');
            if (infoTextHeight > infoTextMaxHeight) {
                btnMore.classList.add('js-block')
            }
            function showMoreText() {
                if (btnMore.classList.contains('js-lessText')) {
                    elem.classList.remove('info-text-open')
                    btnMore.innerHTML = 'Читать полностью';
                    btnMore.classList.remove('js-lessText')
                } else {
                    elem.classList.add('info-text-open')
                    btnMore.innerHTML = 'Скрыть';
                    btnMore.classList.add('js-lessText')
                }
            }
            console.log(infoTextHeight)
            console.log(infoTextMaxHeight)
            btnMore.addEventListener("click", showMoreText);
        })
    }
}