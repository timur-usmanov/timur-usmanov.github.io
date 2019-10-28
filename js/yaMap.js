setTimeout("ymaps.ready(init)", 1000);

function init() {
	var myMap = new ymaps.Map("map", {
		center: [56.740204, 37.221203],
		zoom: 18
	});

	myMap.geoObjects
		.add(new ymaps.Placemark([56.740204, 37.221203], {
			balloonContent: 'я живу <strong>здесь</strong>'
		}, {
			preset: 'islands#icon',
			iconColor: '#11FF00'
		}));
}
