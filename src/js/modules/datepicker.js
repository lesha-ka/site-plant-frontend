export const getDatepicker = () => {
    $(function(){
        $("#datepicker").datepicker({
            minDate: 0,
            onSelect: function(date){
                $('.js-datepickerValue').val(date);
            }
        });
    });
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $(function(){
        $("#birthdate").datepicker({
            showOn: "button",
            buttonImage: "../img/icons/calendar.svg",
            buttonImageOnly: true,
            buttonText: "Выбрать дату",
            beforeShow: function( input, inst){
              $(inst.dpDiv).addClass('profile-info-date');
            },
        });
    });
    $(function(){
        $("#mobiledate").datepicker({
            showOn: "button",
            buttonImage: "../img/icons/calendar.svg",
            buttonImageOnly: true,
            buttonText: "Выбрать дату",
            beforeShow: function( input, inst){
              $(inst.dpDiv).addClass('profile-info-date');
            },
        });
    });
}