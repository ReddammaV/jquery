// for all events we have to pass event(any name of) parameter

$(document).ready(function () {
    $('#first').on("click dblclick mouseover mouseout", function(event){
        $('#result').html('Event ' + event.type);
    })
})