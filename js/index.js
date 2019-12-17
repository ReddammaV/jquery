// Basic Syntax

// $(document).ready(function(){
//     alert('Hello');
// })


$(document).ready(function(){
    // Here .html works as innerHTML
    var a = $('#test1').html();
    console.log(a);

    // test2
    var b = $('#test2').html();
    console.log(b);
})