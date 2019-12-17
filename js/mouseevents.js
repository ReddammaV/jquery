// Mouse Events are
// 1. click
// 2. dblclick - double click
// 3.contextmenu() - Right click
// 4.mouseenter()
// 5.mouseleave()

$(document).ready(function(){

    // click
    $('#test1').click(function(){
        $(this).css('background','green');
        console.log('asd');
    })

    // dblclick - double click
    $('#test1').dblclick(function(){
        $(this).css('background','red');
    })

    // contextmenu - right click
    $('#test1').contextmenu(function(){
        $(this).css('background','blue');
    })

    // mouseenter 
    $('#test1').mouseenter(function(){
        $(this).css('background','cyan');
    })

     // mouseleave 
     $('#test1').mouseleave(function(){
        $(this).css('background','pink');
    })
})