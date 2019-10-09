
$('#findmyloc').click(function (e) {
    console.log('hey')
    e.preventDefault();
    // Coding

    getLocation();
    // initMap();
    $('#location').modal('hide')

});
$('#zipbtn').click(function (e) {
    $('#location').modal('hide')
    zipLocation();

}
);

$('#newLoc').click(function (e) {
    e.preventDefault();
    $('#location').modal('show')

});

$('#authen').on('hidden.bs.modal', function () {
    $('#location').modal('show');

});


// document.getElementById('findmyloc').addEventListener('click', getLocation)


