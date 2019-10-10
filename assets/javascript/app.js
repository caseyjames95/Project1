
// $('#findmyloc').click(function(e) {
//     $('#loadScreen').fadeOut(5000);
// });


// Load Screen Modal control
$('#findmyloc').click(function (e) {
    console.log('Finding Location....')
    e.preventDefault();
  
    getLocation();
    $('#location').modal('hide')
    $('#loadScreen').modal('show')
    $('#loadScreen').fadeOut(2000).modal('hide')
    
});

$('#zipbtn').click(function (e) {
    $('#location').modal('hide')
    $('#loadScreen').modal('show').fadeOut(200)
    zipLocation();
});


// Comment
$('#newLoc').click(function (e) {
    e.preventDefault();
    $('#location').modal('show')

});

// Comment
$('#authen').on('hidden.bs.modal', function () {
    $('#location').modal('show');

});


