// for all events we have to pass event(any name of) parameter

// stopPropagation - Is used for to stop unwanted alerts like below example if we give so many alerts one of the one all alerts will display to cutout that we're using this

$(document).ready(function () {
    $('#first').click(function (event) {
        alert("The div element was clicked!");
    });

    $('h2').click(function (event) {
        alert("The h2 element was clicked!");
    });

    // event.stopPropagation() i applied
    $('p').click(function (event) {
        event.stopPropagation();
        alert("The <p> element was clicked!");
    });

    $('button').click(function (event) {
        alert("The button element was clicked!");
    });

})