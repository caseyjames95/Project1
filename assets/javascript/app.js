
// Comment
$('#findmyloc').click(function (e) {
    console.log('Finding Location....')
    e.preventDefault();
  
    getLocation();
    $('#location').modal('hide')

});
$('#zipbtn').click(function (e) {
    $('#location').modal('hide')
    zipLocation();

}
);




// Comment
$('#newLoc').click(function (e) {
    e.preventDefault();
    $('#location').modal('show')

});

// Comment
$('#authen').on('hidden.bs.modal', function () {
    $('#location').modal('show');

});


