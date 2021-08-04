var map = L.map('map').setView([33.9401,-118.1332], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([33.9401,-118.1332]).addTo(map)
		.bindPopup('Downey, CA <br> Where Sarah is residing')
		.openPopup();	
