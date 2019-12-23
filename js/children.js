// Jquery Descendants Traversing Methods are
// 1.children
// 2.find

$(document).ready(function(){
    // NOTE: In the place of css you can use any method like text,html,animate,addClass etc..,
    
    // children - It is main for parent level children Is used to target the children of the selector
    // $('#inner').children().css('background','red');
    // $('#inner .row').children('.test').css('background','red');

    // find - It is also for grand parents,great grand parents level find Is used to target all child
    $('#inner').find('.test').css('background','red');
})
