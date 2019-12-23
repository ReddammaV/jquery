// Filtering Methods are

// first
// last
// eq
// filter
// not
// slice
$(document).ready(function () {
    // first - It targets first element
    // $('p').first().css('background','red');
    // $('#second p').first().css('background','red');

    // last -It targets last element
    // $('p').last().css('background','red');
    // $('#second p').last().css('background','red');
    // $('ul li').last().css('background','red');

    // eq - means equal
    // $('#list li').eq(2).css('background','red');
    // its comes from last
    // $('#list li').eq(-2).css('background','red');


    // filter - we have to pass parameter
    // $('#list li').filter('.test').css('background','red');

    // not - is used for instead of selected another elements are targeted we have to pass parameter
    // $('#list li').not('.test').css('background', 'red');

    // slice
    // $('#list li').slice(2).css('background', 'red');
    $('#list li').slice(2,4).css('background', 'red');




})