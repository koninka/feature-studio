const MAP = () => {
	ymaps.ready(function () {
		const map = new ymaps.Map('map', {
				center: [43.1207133,131.8780963],
				zoom: 16,
				controls: []
			});

		let	marker = new ymaps.Placemark(map.getCenter(), {
				iconContent: 'ул. Батарейная 6а '
			}, {
				preset: "islands#yellowStretchyIcon"
			});

		map.geoObjects.add(marker);
	});
};

export default MAP;