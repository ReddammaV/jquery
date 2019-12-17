// keyboard events are
// 1. keypress()
// 2. keydown()
// 3.keyup()

$(document).ready(function () {

    // keypress
    $('body').keypress(function () {
        $(this).css('background', 'green');
        console.log('asd');
    })

    // keydown
    $('body').keydown(function () {
        $(this).css('background', 'red');
    })

    // keyup
    $('body').keyup(function () {
        $(this).css('background', 'blue');
    })

})
