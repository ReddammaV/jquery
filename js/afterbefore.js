// after() - Is used for show an element in the bottom after div closes
// before() - Is used for show an element on the top before div opens

$(document).ready(function(){
    // after - It will n times will appears if you clicked the button
    $('#afterbtn').click(function(){
        $('#test1').after('<h5>Hello This is after() Method</h5>');
    })

    // before - It will n times will appears if you clicked the button
    $('#beforebtn').click(function(){
        $('#test1').before('<h5>Hello This is before() Method</h5>');
    })
})