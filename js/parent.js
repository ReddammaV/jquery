// Jquery Ancestors Traversing Methods are
// 1.parent
// 2.parents
// 3.parentsUntil
// 4.offsetParent
// 5.closest

$(document).ready(function(){
    // NOTE: In the place of css you can use any method like text,html,animate,addClass etc..,

    // parent - the method of css applied for the parent of the one div selector or elemnt
    // $('#child-c').parent().css('background','red');

    // parents - the method of css applied for all of  the parent div's
    // $('#inner').parents().css('background','red');
    // if you want apply method only for one parent element using parents child with parameter
    // $('#child-c').parents('#outer').css('background','red');


    // parentsUntil - the method of css applied until the parameter is passed
    // $('#child-c').parentsUntil('#outer').css('background','red');

    // offsetParent - Is used for where the position is relative there this method will apply
    // here in our case id outer have inline style position:relative
    // $('#child-c').offsetParent('#outer').css('background','red');

    // closest - Is used for which element is close to that for that the method will apply
    $('#child-c').closest('div').css('background','red');



})