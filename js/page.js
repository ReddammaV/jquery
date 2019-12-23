// for all events we have to pass event(any name of) parameter

$(document).ready(function () {
    $(document).mousemove(function (event) {
        // pageX and pageY
        $('#result').text('pageX value: ' + event.pageX + ' pageY value: ' +  event.pageY);
       
        var x = event.pageX;
        var y = event.pageY;

        // offset is used for that div as a cursor
        // $('#box').offset({top:y, left:x});
    })
})