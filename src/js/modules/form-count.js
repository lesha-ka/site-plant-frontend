export const getFormCount= () => {
    if(document.querySelector('.js-basketCount')) {
        let basketCount = document.querySelectorAll('.js-basketCount')
        basketCount.forEach(function(elem) {
            let count = elem.querySelector('.js-count');
            let plus = elem.querySelector('.js-plus');
            let minus = elem.querySelector('.js-minus');
            let units = count.value.replace(/\d/g, '');
            plus.onclick = function(){
                count.value = parseInt(count.value)+1+units;
            }
            minus.onclick = function(){
                if(parseInt(count.value) > 1) {
                    count.value = parseInt(count.value)-1+units;
                }
            };
        })
    }
}