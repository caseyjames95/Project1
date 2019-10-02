
//  $('#authen').on('hidden.bs.modal', function () {
//     // Load up a new modal...
//     $('#locationModal').modal('show')
//   })

    $('#findmyloc').click(function(e) {
        e.preventDefault();
        // Coding
        $('#locationModal').modal('hide'); 
        getLocation();
        // initMap();
        
    });


$('#authen').on('hidden.bs.modal', function () {
    $('#location').modal('show');
    console.log('hello')
  });


// document.getElementById('findmyloc').addEventListener('click', getLocation)
        

