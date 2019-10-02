
let map;
let lat;
let lng;
let request;
let service;
let markers = [];
let infowindow = new google.maps.InfoWindow();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}




function initMap(lati, longi) {

    let center = new google.maps.LatLng(lati, longi);
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13
    })
    request = {
        location: center,
        radius: 8000,
        types: ['coffee','cafe']
    }


service = new google.maps.places.PlacesService(map);
    
console.log(lati, longi)
service.nearbySearch(request, callback);

};
   


   


function callback(results, status){
    console.log(results)
if(status == google.maps.places.PlacesServiceStatus.OK){
    for (var i =0; i < results.length; i++){
        markers.push(createMarker(results[i]));
    }
}
}

function createMarker(place){

var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
});
marker.addListener('click', function() {
    infowindow.open(map, marker);
    infowindow.setContent(place.name);
})
return marker;
}




function showPosition(position) {
    lat = parseFloat(position.coords.latitude);
    lng = parseFloat(position.coords.longitude);
    console.log(lat, lng)
    initMap(lat, lng)
    map.setCenter(new google.maps.LatLng(lat, lng));
};


