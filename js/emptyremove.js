// empty() - Is used to empty the div elements(It shows div only div elements are remove from the dom)
// remove() - Is used to remove total div from the dom

$(document).ready(function(){
    // empty
    $('#emptybtn').click(function(){
        $('#test1').empty();
    })

    // remove
    $('#removebtn').click(function(){
        $('#test1').remove();
    })
})