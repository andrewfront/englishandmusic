const map = () => {
    let center = [45.04278584916664,41.95538164985919]
    ymaps.ready(init)
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
export default map