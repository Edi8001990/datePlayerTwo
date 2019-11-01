
$( document ).ready(function() {
$(".link").click(function(e){
    e.preventDefault();
        $('.forms-container #link1').hide();
        $('.forms-container #link2').hide();
        $('#' + $(this).data('rel')).show();
        
});


$('.inline-block #change-bg').click(function(){
    $('#change-bg.red').removeClass('red')
        $(this).addClass('red');
});



});





