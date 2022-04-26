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
}