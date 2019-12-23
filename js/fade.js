$(document).ready(function(){

    // example with function 
    $('#fadeinbtn').click(function(){
        $('#test1').fadeIn(1000, function(){
            console.log('You are fadeIn');
        });
    });

    // fadeIn 
    // $('#fadeinbtn').click(function(){
    //     // $('#test1').fadeIn();
    //     $('#test1').fadeIn(1000);
    //     // $('#test1').fadeIn('slow');
    //     // $('#test1').fadeIn('fast');
    // });

    // fadeOut
    $('#fadeoutbtn').click(function(){
        // $('#test1').fadeOut();
        $('#test1').fadeOut(1000);
        // $('#test1').fadeOut('slow');
        // $('#test1').fadeOut('fast');
    });

    // fadeToggle
    $('#fadetogglebtn').click(function(){
        // $('#test1').fadeToggle();
        $('#test1').fadeToggle(1000);
        // $('#test1').fadeToggle('slow');
        // $('#test1').fadeToggle('fast');
    });

    // fadeTo
    $('#fadetobtn').click(function(){
        $('#test1').fadeTo(1000, 0.6);
    });
})