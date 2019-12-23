// each - is used for targeting each element in the list or para anything (like loop)
$(document).ready(function () {
    // each
    $('#list li').each(function(){
        console.log($(this).text());
        // console.log($(this).html("Hello"));
        $(this).css('background','red');
    })
})