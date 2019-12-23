// Sibling
// next
// nextAll
// nextUntil
// prev
// prevAll
// prevUntil

$(document).ready(function(){
    // NOTE: In the place of css you can use any method like text,html,animate,addClass etc..,
    
    // siblings - It tarets all siblings
    // $('#child-c').siblings().css('background','red');
    // targeting with selector
    // $('#child-c').siblings('.test').css('background','red');

    // next - It targets next element
    // $('#child-c').next().css('background','red');

    // prevAll - It targets all previous elements
    // $('#child-c').prevAll().css('background','red');

    // nextAll - It targets all next elements
    // $('#child-c').nextAll().css('background','red');

     // prevUntil - It targets untill the parameter selector finds elements
    //  if the parameter element is not findout it apllies to all
    // $('#child-c').prevUntil('.test').css('background','red');

    // nextUntil - It targets untill the parameter selector finds elements
    $('#child-c').nextUntil('.test').css('background','red');

})