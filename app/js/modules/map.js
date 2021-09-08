const map = () => {
    function createCard() {
        let center = [45.04278584916664,41.95538164985919]
        ymaps.load(init)
        function init(){
            const myMap = new ymaps.Map("map", {
                center: center,
                zoom: 19
            });
            let placemark = new ymaps.Placemark(center, {}, {
                iconLayout: 'default#image', //используем свою картинку
                iconImageHref: 'https://cdn-icons-png.flaticon.com/512/17/17177.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-19, -44] //отступ от центра
            })
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                //... отключаем перетаскивание карты
                myMap.behaviors.disable('drag');
            }
            myMap.controls.remove('geolocationControl'); // удаляем геолокацию
            myMap.controls.remove('searchControl'); // удаляем поиск
            myMap.controls.remove('trafficControl'); // удаляем контроль трафика
            myMap.controls.remove('typeSelector'); // удаляем тип
            myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
            myMap.controls.remove('rulerControl'); // удаляем контрол правил
            myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
            myMap.geoObjects.add(placemark)
        }
    }
    setTimeout(createCard, 3000);
}
export default map