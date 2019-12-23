// for all events we have to pass event(any name of) parameter

$(document).ready(function () {
    $('#first').on("click", function(event){
        // $('#result').html('Target Element' + event.target);
        // $('#result').html(event.target);
        // $('#result').html('Target Element ' + event.target.innerHTML);
        $('#result').html('Target Element ' + event.target.nodeName);

    })

    
})