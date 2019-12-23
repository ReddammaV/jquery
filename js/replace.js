// replaceWith() - Is used for single element replace
// replaceAll() - Is used for single and multiple elements replace

$(document).ready(function(){
    // replaceWith 
    $('#repalceWithbtn').click(function(){
        // $('#test1 p:first').replaceWith('<h2>Text is Replaced</h2>');
        // without tags also we'can
        // $('#test1 p:nth-child(3)').replaceWith('Text is Replaced');
        $('#test1 p:nth-child(3)').replaceWith('<h2>Text is Replaced</h2>');
    });

    // repalceAll
    $('#repalceAllbtn').click(function(){
        // replaceAll is not works without tag

        // $('<h2>Text is Replaced All</h2>').replaceAll('#test1 p:first');
        // $('<h2>Text is Replaced All</h2>').replaceAll('#test1 p:last');
        // $('<h2>Text is Replaced All</h2>').replaceAll('#test1 p:nth-child(3)');
        $('<h2>Text is Replaced All</h2>').replaceAll('#test1 p');
    });
})