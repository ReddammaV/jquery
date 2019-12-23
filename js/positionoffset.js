// position() - Is relative to the parent path (like relative)
// offset() - Is relative to the document (like absolute)
// methods are
// top and left

$(document).ready(function(){
    // position 
    $('#positionbtn').click(function(){
        console.log($('#test1 h2').position());
        var x = $('#test1 h2').position();
        console.log('Top: ' + x.top);
        console.log('Left: ' + x.left);
    });

    // offset
    $('#offsetbtn').click(function(){
        console.log($('#test1 h2').offset()); 
        var y = $('#test1 h2').offset();
        console.log('Top: ' + y.top);
        console.log('Left: ' + y.left);
    });
})