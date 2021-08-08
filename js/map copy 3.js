// Global variables
let map;

// path to csv data
let path = "data/WaterSystems.csv";
let markers = L.featureGroup();


// initialize
$( document ).ready(function() {
    createMap();
	readCSV(path);
});

// create the map
function createMap(){
	map = L.map('map').setView([34.05,-118.115],10);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to read csv data
function readCSV(){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			// map the data
			mapCSV(data);

		}
	});
}

// function to map csv data
function mapCSV(data){
	
	// loop through each entry
	data.data.forEach(function(item,ws){
		// create marker
		let marker = L.marker([item.Latitude,item.Longitude])

		// add marker to featuregroup
		markers.addLayer(marker)
	})

	// add featuregroup to map
	markers.addTo(map)

	// fit markers to map
	map.fitBounds(markers.getBounds())
}


