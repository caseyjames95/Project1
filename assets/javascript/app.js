
    $(window).on('load',function(){
        $('#locationModal').modal('show');
    });

    $('#findmyloc').click(function(e) {
        e.preventDefault();
        // Coding
        $('#locationModal').modal('hide'); 
        getLocation();
        // initMap();
        
    });


$('#authen').on('hidden.bs.modal', function () {
    $('#location').modal('show')
  })


    // document.getElementById('findmyloc').addEventListener('click', getLocation)
        

