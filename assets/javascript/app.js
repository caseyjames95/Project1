
//  $('#authen').on('hidden.bs.modal', function () {
//     // Load up a new modal...
//     $('#locationModal').modal('show')
//   })

$('#findmyloc').click(function (e) {
    e.preventDefault();
    // Coding
    $('#locationModal').modal('hide');
    getLocation();
    // initMap();
    $('#location').modal('hide')

});

$('#newLoc').click(function (e) {
    e.preventDefault();
    // Coding
    $('#locationModal').modal('show');
    
    // initMap();
    $('#location').modal('show')

});

$('#authen').on('hidden.bs.modal', function () {
    $('#location').modal('show');

});


// document.getElementById('findmyloc').addEventListener('click', getLocation)


