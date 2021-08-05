// Global variables
let map;

// path to csv data
let markers = L.featureGroup();


// initialize
$( document ).ready(function() {
    createMap();
});

// create the map
function createMap(){
	map = L.map('map').setView([34.05,-118.115],10);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}



