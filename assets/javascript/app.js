
//  $('#authen').on('hidden.bs.modal', function () {
//     // Load up a new modal...
//     $('#locationModal').modal('show')
//   })

$('#findmyloc').click(function (e) {
    console.log('hey')
    e.preventDefault();
    // Coding
  
    getLocation();
    // initMap();
    $('#location').modal('hide')

});
$('#zipbtn').click(function (e){
    $('#location').modal('hide')
    zipLocation();

}
);

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


