$(document).ready(function(){
    $("#click").click(function(){
        $("#myGif").fadeOut(5000);
    });
    // $("#hide").click(function(){
    //     $("button").hide();
    // })
    $('button')
.click(
     function ()
     {
         $(this).hide();
     }
);
$('HTML').click(function(){
    $(this).fadeOut(5000);
})

});