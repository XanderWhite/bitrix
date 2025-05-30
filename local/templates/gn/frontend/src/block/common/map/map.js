document.addEventListener('DOMContentLoaded', async function() {
	const offices = {
		tula: {
			mapId: 'yandex-map1',
			coords: [54.200836, 37.584659],
			address: "300041, г. Тула, ул. Ф. Смирнова ул., д. 28, оф. 601-602, 701, 703-707, 712\nТел. / Факс: (4872) 250-450, 57-05-01",
		},
		moscow: {
			mapId: 'yandex-map-2',
			coords: [55.630407, 37.606881],
			address: "115230, г. Москва, Варшавское шоссе, д. 47, к. 4, оф. 1224 (12 этаж)\nТел. / Факс: (495) 933-62-10",
		}
	};

	const children = document.getElementById('offices').children;
  	const tabs = document.querySelectorAll('[data-office]');

	async function  initMap(office) {
		await window.ymaps3.ready;

		const container = document.getElementById(office.mapId);
		console.log(container);
		const map = new window.ymaps3.YMap(container, { location: {
			center: office.coords,
			zoom: 16,
			controls: ['zoomControl']
		}});
		// const placemark = new window.ymaps3.Placemark(office.coords, {
		// 	balloonContent: office.address.replace(/\n/g, '<br>')
		// }, {
		// 	preset: 'islands#redDotIcon'
		// });

		// map.geoObjects.add(placemark);

		// if (document.querySelector(`[data-office="${office.mapId === 'yandex-map1' ? 'tula' : 'moscow'}"].active`)) {
		// 	placemark.balloon.open();
		// }

		// window.addEventListener('resize', function() {
		// 	map.container.fitToViewport();
		// });
	}

	function switchOffice(office) {
		tabs.forEach(tab => {
			if (tab.dataset.office === office) {
				tab.classList.add('active');
			} else {
				tab.classList.remove('active');
			}
		});

		Array.from(children).forEach(block => {
			if (block.dataset.office === office) {
				block.classList.add('active');
			} else {
				block.classList.remove('active');
			}
		});}

	tabs.forEach(tab => {
		tab.addEventListener('click', function() {
			switchOffice(this.dataset.office);
		});
	});



	await initMap(offices.tula);

});