let zipCode = 0
let zipLat = 0
let zipLng = 0


// fetch(`https://www.zipcodeapi.com/rest/${zipAPI}/info.json/${zipCode}/degrees`)

// let zipcode = 0
// let url = `https://www.zipcodeapi.com/rest/${zipAPI}/info.json/${zipCode}/radians`

// function initMap(lati, longi) {

//     let center = new google.maps.LatLng(lati, longi);
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: center,
//         zoom: 13
//     })
//     request = {
//         location: center,
//         radius: 8000,
//         types: ['coffee', 'cafe']
//     }
// }

// service = new google.maps.places.PlacesService(map);
const grabData = function () {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.zipcodeapi.com/rest/xeKnYZTv11iL9NnI5XPWgeFcynWUq7Gq80JOpdpP6FxJ5nbDFbGTatKwOzemugz8/info.json/${zipCode}/degrees`)}`)
        .then(r => r.json())
        .then(data => {
            console.log(JSON.parse(data.contents))
        })
        .catch(e => console.log(e))
}

const grabZip = function () {
    zipCode = document.getElementById('zipCodeValue').value
    grabData()
}


document.getElementById('zipBtn').addEventListener('click', grabZip)

// Make AJAX request
// $.ajax({
//     "url": url,
//     "dataType": "json"
// }).done(function (data) {
//     handleResp(data);

//     // Store in cache
//     cache[zipcode] = data;
// }).fail(function (data) {
//     if (data.responseText && (json = $.parseJSON(data.responseText))) {
//         // Store in cache
//         cache[zipcode] = json;

//         // Check for error
//         if (json.error_msg)
//             errorDiv.text(json.error_msg);
//     }
//     else
//         errorDiv.text('Request failed.');
// });
