export const getRegistration= () => {
    if(document.querySelector('.js-registrationStepFirst')) {
        const stepFirst = document.querySelector('.js-registrationStepFirst');
        const registrationWay = document.querySelector('.js-registrationWay');
        const wayMail = document.querySelector('.js-registrationMail');
        const wayPhone = document.querySelector('.js-registrationPhone');
        registrationWay.addEventListener('click', function(e) {
            let selectedWay = document.querySelector('input[name="reg-way"]:checked').value;
            if (selectedWay == 'email') {
                stepFirst.classList.add('js-hide');
                wayMail.classList.remove('js-hide');
            } else if (selectedWay == 'phone') {
                stepFirst.classList.add('js-hide');
                wayPhone.classList.remove('js-hide');
            }
         });
    }
}