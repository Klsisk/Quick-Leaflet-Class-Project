# Quick Leaflet Class Project

## Citi Bike
We will utilize the Citi Bike API in order to retrieve the statuses and locations of all of the Citi Bike stations in New York. It's highly recommended to complete the Basic Version before attempting the Advanced Version.

#Instructions
- Use the Citi Bike Station Information Endpoint to retrieve information about station names and locations. Take a moment to study the data sent back by the endpoint in your browser.
  - Each object in the stations array has station_id, name, capacity, lat, and lon properties.
  - The logic.js file in the skeleton folder contains coordinates that can be used to position a Leaflet map over New York City.

- Create a function called createMap that will take in bikestations as an argument. This function will create both the tile layer and an overlay layer with the pins for each station.

- Create a second function createMarkers that will take response as an argument.
  - Using the response from a future d3 call loop through the stations and create a marker to represent each station.
  - Give each marker a popup to display the name and capacity of its station.

- In the createMarkers function pass the result the bike makers into the the createmap function as an layerGroup.

- Perform a GET request using D3 to the Citi Bike Station Information Endpoint that will call the createMarkers function.

- Remember to pass in your unique Mapbox token.

![image](https://user-images.githubusercontent.com/69765842/105607689-46c47d00-5d6e-11eb-9604-6fb9118fd1f2.png)
