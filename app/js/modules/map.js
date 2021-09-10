const map = () => {
    setTimeout(function(){
        const elem = document.createElement('script');
        elem.type = 'text/javascript';
        elem.src = 'https://api-maps.yandex.ru/2.1/?loadByRequire=1apikey=f0d676af-e48c-4c81-bf15-e2134be76770&lang=ru_RU';
        document.querySelectorAll('body')[0].append(elem);
    }, 3000);
    function createCard() {
        let center = [45.04279508020184,41.95540914651785]
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
    setTimeout(createCard, 4000);
}
export default map