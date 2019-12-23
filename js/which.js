// for all events we have to pass event(any name of) parameter

$(document).ready(function () {
    $('#first').on("click dblclick mouseover mouseout", function(event){
        // event.which returns ASCII Value check your mail for that ASCII table
        // $('#result').html(event.type + ': ' + event.which);
        $('#result').html(event.type + ': ' + event.which);
    })

    $('#inputbox').on("keydown", function(){
        $('#forinput').html(event.type + ': ' + event.which);
    })
})