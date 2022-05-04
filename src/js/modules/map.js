export const getMap= () => {
    ymaps.ready(function() {
        let myMap = new ymaps.Map("map", {
            center: [55.753995, 37.614069],
            zoom: 18,
            controls: ['zoomControl', 'geolocationControl']},{
                zoomControlPosition: { right: 10, top: 150 }, 
                zoomControlSize: 'small', 
                geolocationControlPosition: { right: 10, top: 220 }
            },
        )
        let changeMap = document.querySelectorAll('.js-changeMap')
        changeMap.forEach(function(elem) {
            let address = elem.value;
            let re = /\s*,\s*/;
            let addressList = address.split(re);
            let latitude = addressList[0];
            let longitude = addressList[1];
            function changeAddress() {
                myMap.setCenter([latitude,longitude],18)
            }
            elem.addEventListener("click", changeAddress);
        })
    })    
}