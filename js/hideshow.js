// hide - Is used for to know the given class is exist or not
$(document).ready(function(){
    // hide 
    $('#hidebtn').click(function(){
        // $('#test1').hide();
        $('#test1').hide(1000);
        // $('#test1').hide('slow');
        // $('#test1').hide('fast');
    });

    // show
    $('#showbtn').click(function(){
        // $('#test1').show();
        $('#test1').show(1000);
        // $('#test1').show('slow');
        // $('#test1').show('fast');
    });

    // toggle
    $('#togglebtn').click(function(){
        // $('#test1').toggle();
        $('#test1').toggle(1000);
        // $('#test1').toggle('slow');
        // $('#test1').toggle('fast');
    });
})