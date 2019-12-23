// hasClass - Is used for to know the given class is exist or not
$(document).ready(function(){
    // hasClass 
    $('#hasclassbtn').click(function(){
        console.log($('#test1').hasClass('bg-info'));
        console.log($('#test1').hasClass('text-info'));
        console.log($('#test1 h2').hasClass('text-danger'));
    });
})