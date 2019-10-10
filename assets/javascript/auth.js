var user = firebase.auth().currentUser;

if (user) {
  console.log("user signed in")
} else {
    $(window).on('load', function () {
        $('#authen').modal('show')
    })
}