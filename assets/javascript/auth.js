var user = firebase.auth().currentUser;

if (user) {
  $(window).on('load', function () {
    $('#authen').modal('show')
})
} else {
  console.log('user signed in')
}