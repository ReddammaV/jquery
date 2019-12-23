

$(document).ready(function(){

    // animatebtn 
    $('#animatebtn').click(function(){
        $('#test1').animate({
            left:'150px',
            maxWidth: '+600px',
            // width: 'toggle',
            // width: 'hide',
            flex: '+300px',
            fontSize: '32px',
            borderWidth: '5px'
        }, 3000);
    });

    // stopbtn 
    $('#stopbtn').click(function(){
        $('#test1').stop();
        // $('#test1').stop(true);

        // it will stops on end 
        // $('#test1').stop(true,true);
    });

})