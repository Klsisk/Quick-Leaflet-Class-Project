
// Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 12,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    });

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      tileSize: 512,
      maxZoom: 12,
      zoomOffset: -1,
      id: "dark-v10",
      accessToken: API_KEY
    });

var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

var myMap = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers:[streetmap]
});

L.control.layers(baseMaps, {
}).addTo(myMap);

// Store our API endpoint inside queryUrl
var queryUrl = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.stations object to the createFeatures function
  for (var i = 0; i < data.data.stations.length; i++) {
  var station = data.data.stations[i];
  L.marker([station.lat,station.lon])
    .bindPopup("<h1>" + station.name + "</h1> <hr> <h3>Capacity: " + station.capacity + "</h3>")
    .addTo(myMap);
}
});



































