// wrap() - Is used for to wrap in an element
// unwrap() - Is used to unwrap for an element

$(document).ready(function(){
    // wrap 
    $('#wrapbtn').click(function(){
        $('#test1 p').wrap('<div></div>');
        console.log('wrap');
        // $('#test1 p').wrap('<h2></h2>');
    });

    // unwrap
    $('#unwrapbtn').click(function(){
        $('#test1 p').unwrap(); 
        console.log('Unwrap');               
    });


     // wrapall 
     $('#wrapallbtn').click(function(){
        $('#test2 p').wrapAll('<div class="text-dark"></div>');
    });

    // wrapinnerbtn
    $('#wrapinnerbtn').click(function(){
        $('#test2 h2').wrapInner('<span class="text-danger"></span>'); 
    });
})