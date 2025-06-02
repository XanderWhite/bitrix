document.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('[data-office]');
	const officeElements = document.getElementById('offices').children;

	const offices = {
		tula: {
			mapId: 'map1',
			coords: [37.584659, 54.200836],
			address: "300041, г. Тула, ул. Ф. Смирнова ул., д. 28, оф. 601-602, 701, 703-707, 712\nТел. / Факс: (4872) 250-450, 57-05-01",
		},
		moscow: {
			mapId: 'map2',
			coords: [37.606881, 55.630407],
			address: "115230, г. Москва, Варшавское шоссе, д. 47, к. 4, оф. 1224 (12 этаж)\nТел. / Факс: (495) 933-62-10",		}
	};

	async function initMap(office) {
		try {
			await window.ymaps3.ready;

			const {
				YMap,
				YMapDefaultSchemeLayer,
				YMapDefaultFeaturesLayer,
				YMapMarker,
			} = window.ymaps3;

			const mapContainer = document.getElementById(office.mapId);

			const map = new YMap(mapContainer, {
				location: {
					center: office.coords,
					zoom: 16,
				},
			});

			map.addChild(new YMapDefaultSchemeLayer());
			map.addChild(new YMapDefaultFeaturesLayer());
			const markerElement = document.createElement("div");
			markerElement.classList.add('marker');

			const marker = new YMapMarker(
				{ coordinates: office.coords, title: "Наш офис" },
				markerElement
			);
			map.addChild(marker);

			let balloon = null;

			function closeBalloon() {
				if (balloon) {
					balloon.remove();
					balloon = null;
				}
			}

			markerElement.addEventListener("click", (e) => {
				e.stopPropagation();

				if (balloon) {
					closeBalloon();
					return;
				}

				balloon = document.createElement("div");
				balloon.classList.add('balloon');
				balloon.innerHTML = office.address;

				mapContainer.appendChild(balloon);

				const markerRect = markerElement.getBoundingClientRect();
				const containerRect = mapContainer.getBoundingClientRect();

				balloon.style.left = `${markerRect.left - containerRect.left - balloon.offsetWidth/2  + markerRect.width/2}px`;
				balloon.style.top = `${markerRect.top - containerRect.top - balloon.offsetHeight - 10}px`;


			});

			document.addEventListener("click", (e) => {
				if (balloon && !balloon.contains(e.target) && e.target !== markerElement) {
					closeBalloon();
				}
			});

			window.addEventListener("resize",() => {
				map.updateSize();
				if (balloon) {
					const markerRect = markerElement.getBoundingClientRect();
					const containerRect = mapContainer.getBoundingClientRect();

					balloon.style.left = `${markerRect.left - containerRect.left - balloon.offsetWidth/2 + markerRect.width/2}px`;
					balloon.style.top = `${markerRect.top - containerRect.top - balloon.offsetHeight - 10}px`;
				}
			});

		} catch (error) {
			console.error("Ошибка при инициализации карты:", error);
		}
	}

	function initAllMaps() {
		Object.values(offices).forEach(office => {
			if (document.getElementById(office.mapId)) {
				initMap(office);
			}
		});
	}

	function switchOffice(office) {
		tabs.forEach(tab => {
			if (tab.dataset.office === office) {
				tab.classList.add('active');
			} else {
				tab.classList.remove('active');
			}
		});

		Array.from(officeElements).forEach(block => {
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

	initAllMaps();
});