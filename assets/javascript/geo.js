let map;
let lat;
let lng;
let request;
let service;
let markers = [];
let infowindow = new google.maps.InfoWindow();
let geocoder= new google.maps.Geocoder();

let resultsarr = [];
let zipInput;
let address;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function zipLocation(){
    zipInput = document.getElementById('zipInput').value;
    address = zipInput;

    geocoder.geocode({ 'address': 'zipcode '+address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
             lat = results[0].geometry.location.lat();
             lng = results[0].geometry.location.lng();
        
        } else {
            alert("Request failed.")
        }
        initMap(lat, lng)
    map.setCenter(new google.maps.LatLng(lat, lng));
    })};
    // return [lat, lng];
    
    




function initMap(lati, longi) {

    let center = new google.maps.LatLng(lati, longi);
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 13
    })
    request = {
        location: center,
        radius: 8000,
        keyword: ['coffee', 'cafe'],

    }


    service = new google.maps.places.PlacesService(map);


    service.nearbySearch(request, callback);
    console.log(request)
};






function callback(results, status) {
    resultsarr = results;
    console.log(resultsarr)
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
            markers.push(createMarker(results[i]));
        }
        makeCard();
    }
}

function createMarker(place) {

    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
        infowindow.setContent(place.name);

    })
    return marker;
}


function makeCard() {
    for (let i = 0; i < resultsarr.length; i++) {
        const cardSlot = document.getElementById('cardSlot');
        let shopCard = `<br>
<div class="card" style="width: 18rem;">
<class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${resultsarr[i].name}</h5>
  <p class="card-text">Rating: ${resultsarr[i].rating}<br>
                       Address: ${resultsarr[i].vicinity}<br>
                       Price Level: ${resultsarr[i].price_level ? ((resultsarr[i].price_level === 1) ? "$" : "$$") : "N/A"}</p>
  
</div>
</div>`
        if (resultsarr[i].name === 'Starbucks') {
            console.log('starbucks')
        } else {
            cardSlot.innerHTML += shopCard;
        }
    }
}
// comment

function showPosition(position) {
    
    lat = parseFloat(position.coords.latitude);
    lng = parseFloat(position.coords.longitude);

    initMap(lat, lng)
    map.setCenter(new google.maps.LatLng(lat, lng));
};