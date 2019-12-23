// for all events we have to pass event(any name of) parameter

$(document).ready(function () {
    $('#prevent').click(function (event) {
        event.preventDefault();
        console.log('Prevented Default Working!');

        // isDefaultPrevented() - Is used for to know the method or selector have preventDefault() and it gives boolean value
        var a = event.isDefaultPrevented();
        $('h3').html(a);
        console.log(a);
    });

})