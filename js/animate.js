// syntax
// $(selector).animate({params}, speed, callback);
// properties should be in camelCase

$(document).ready(function(){

    // animatebtn 
    // $('#animatebtn').click(function(){
    //     $('#test1').animate({left:'150px'}, 1000, function(){
    //         console.log('You are Animatting');
    //     });
    // });

    // animateonebtn 
    $('#animateonebtn').click(function(){
        $('#test1').animate({
            left:'150px',
            maxWidth: '+300px',
            // width: 'toggle',
            // width: 'hide',
            flex: '+300px',
            fontSize: '32px',
            borderWidth: '5px'
        });
    });

    animatetwobtn 
    $('#animatetwobtn').click(function(){
        $('#test1').animate({left:'150px', Width: 'toggle'}, 'fast', function(){
            console.log('You are Animatting Toggle');
        });
    });

})