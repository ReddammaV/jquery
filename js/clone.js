// clone() - Is used to clone an element from one place to another place(example: div to another div)

$(document).ready(function(){
    // clone 
    $('#clonebtn').click(function(){
        $('#test1 h2').clone().prependTo('#test2');
        $('#test1 p').clone().appendTo('#test2');
    })
})