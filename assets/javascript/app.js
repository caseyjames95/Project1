
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


    // document.getElementById('findmyloc').addEventListener('click', getLocation)
        