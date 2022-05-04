export const getFormCount= () => {
    if(document.querySelector('.js-basketCount')) {
        let basketCount = document.querySelectorAll('.js-basketCount')
        basketCount.forEach(function(elem) {
            let count = elem.querySelector('.js-count');
            let plus = elem.querySelector('.js-plus');
            let minus = elem.querySelector('.js-minus');
            let units = count.value.replace(/\d/g, '');
            plus.onclick = function(){
                if (count.classList.contains('js-countPieces')) {
                    count.value = parseInt(count.value)+1+units + ' шт'
                } else {
                    count.value = parseInt(count.value)+1+units
                }
            }
            minus.onclick = function(){
                if (count.classList.contains('js-countPieces') & parseInt(count.value) > 1) {
                    count.value = parseInt(count.value)-1+units + ' шт'
                } else if (parseInt(count.value) > 1) {
                    count.value = parseInt(count.value)-1+units
                }
            };
            if (count.classList.contains('js-countPieces')) {
                count.value = count.value + ' шт'
            }
        })
    }
}