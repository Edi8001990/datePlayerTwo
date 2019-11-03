
$( document ).ready(function() {

        $(".link").click(function(e){
            e.preventDefault();
                $('.forms-container #link1').hide();
                $('.forms-container #link2').hide();
               
                $('#' + $(this).data('rel')).show();
                
        });
});





