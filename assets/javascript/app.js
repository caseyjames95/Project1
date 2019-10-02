
// $(window).on('load', function () {
//     $('#myModal').modal('show');
// });

$('#authen').on('hidden.bs.modal', function () {
    $('#location').modal('show')
  })


document.getElementById('findmyloc').addEventListener('click', geoloc)
