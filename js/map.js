// Global variables
let map;

// path to csv data
let path = "data/watersystems.csv";
let markers = L.featureGroup();


// initialize
$( document ).ready(function() {
    createMap();
	readCSV();
});

// create the map
function createMap(){
	map = L.map('map').setView([0,0],3);

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

	// circle options
	let circleOptions = {
		radius: 5,
		weight: 1,
		color: 'white',
		fillColor: 'dodgerblue',
		fillOpacity: 1
	}

	// loop through each entry
	data.data.forEach(function(item,index){
		// create a marker
		let marker = L.circleMarker([item.latitude,item.longitude],circleOptions)

		// add marker to featuregroup
		markers.addLayer(marker)
	})

	// add featuregroup to map
	markers.addTo(map)

	// fit map to markers
	map.fitBounds(markers.getBounds())
}