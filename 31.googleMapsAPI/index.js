// Set Map
const initialize = () => {
    let mapOptions = {
        // Zoom on start
        zoom: 12,
        // Initial center coordinates on start
        center: new google.maps.LatLng(43.662670, 10.632830),
        // Type of map
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // Create a new map instance
    let map = new google.maps.Map(document.getElementById('map'), mapOptions)

    // Create an info window
    let infoWindow = new google.maps.InfoWindow();

    // Create a marker
    let marker = new google.maps.Marker({
        // Coordinates for Hammer Road
        position: new google.maps.LatLng(43.703902, 10.397347),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'Hammer Road, the Calzerano\'s Realm'

    })

    // Open tooltip on click on marker
    marker.addListener('click', () => {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker)
    })

    // Adjust map center when the window is resized
    google.maps.event.addDomListener(window, "resize", () => {
        map.setCenter(mapOptions.center);
    })

}

google.maps.event.addDomListener(window, 'load', initialize)