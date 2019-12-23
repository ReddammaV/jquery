// append() - Is used for show an element in the bottom of the div
// prepend() - Is used for show an element on the top of the div

$(document).ready(function(){
    // append - It will n times will appears if you clicked the button
    $('#appendbtn').click(function(){
        $('#test1').append('<h5>Hello This is append() Method</h5>');
    })

    // prepend - It will n times will appears if you clicked the button
    $('#prependbtn').click(function(){
        $('#test1').prepend('<h5>Hello This is prepend() Method</h5>');
    })

    // appendTo - It will n times will appears if you clicked the button
    $('#appendtobtn').click(function(){
        // appendto syntax is diiferent content comes first after selector
        $('<h5>Hello This is appendTo() Method</h5>').appendTo('#test2 p');
    })

    // prependTo  syntax is diiferent content comes first after selector
    $('#prependtobtn').click(function(){
        $('<h5>Hello This is prependTo() Method</h5>').prependTo('#test2 h2');
    })
})