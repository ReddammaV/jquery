// CSS Method is used for to style the element

$(document).ready(function () {
    // css()
    $('#addstyle').click(function () {
        // for single style
        $('#test1 h2').css('color', 'grey');

        // for multiple styles
        $('#test1').css({ 'background': 'crimson', 'color': 'white', 'border': '3px dotted white' });
    })
})