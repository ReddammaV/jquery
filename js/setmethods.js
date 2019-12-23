// set methods are
// text()
// html()
// attr()
// val()

$(document).ready(function(){
    $('#mybtn').click(function(){
        // text()
        $('#test1 h2').text('Set Methods Changed Text!');
        // html()
        $('#test1 p').html('<h2>Hello HTML Changed</h2>');
        // attr()
        $('#test1 p').attr('class','text-danger');       
    })

     // val() - for submit
     $('#myform').submit(function(){
         var a = $('#name').val();
         console.log(a);
         var b = $('#class').val();
         console.log(b);       
     });

    //  val() for setting values
    $('#name').val("Reddamma");
    $('#class').val("B.Tech");
})