// for all events we have to pass event(any name of) parameter

$(document).ready(function () {
    $('p').each(function(i){
        $(this).on("click", {value:i}, function(event){
            // it gets index value of p (1.2 or 3 ...)
            alert(event.data.value);
        })
    })

})