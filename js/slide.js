$(document).ready(function(){

    // example with function 
    $('#slideupbtn').click(function(){
        $('#test1').slideUp(1000, function(){
            console.log('You are slideUp');
        });
    });

    // slideUp 
    // $('#slideupbtn').click(function(){
    //     // $('#test1').slideUp();
    //     $('#test1').slideUp(1000);
    //     // $('#test1').slideUp('slow');
    //     // $('#test1').slideUp('fast');
    // });

    // slideDown
    $('#slidedownbtn').click(function(){
        // $('#test1').slideDown();
        $('#test1').slideDown(1000);
        // $('#test1').slideDown('slow');
        // $('#test1').slideDown('fast');
    });

    // slideToggle
    $('#slidetogglebtn').click(function(){
        // $('#test1').slideToggle();
        $('#test1').slideToggle(1000);
        // $('#test1').slideToggle('slow');
        // $('#test1').slideToggle('fast');
    });

})