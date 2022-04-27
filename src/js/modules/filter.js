export const getFilter = () => {
    $(".js-rangeSlider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 300000,
        from: 0,
        to: 300000,
        extra_classes: 'filter-item-range',
        label: false,
        drag_interval: true,
        min_interval: null,
        max_interval: null
    });
    $(".js-rangeSlider").on("change", function () {
        var inputMin = $(".js-priceMin");
        var inputMax = $(".js-priceMax");
        var $this = $(this),
            value = $this.prop("value").split(";");
            var minPrice = value[0];
            var maxPrice = value[1];
            inputMin.val(minPrice + " ₽");
            inputMax.val(maxPrice + " ₽");
    });
    $(".js-filterForm").on("change", function(event) {
        $(".js-filterCount").addClass('js-block');
        var changedInput = event.target;
        var top = $(changedInput).position().top;
        $(".js-filterCount").css('top', top - 40);
        console.log(top)
    });
}