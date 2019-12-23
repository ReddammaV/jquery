// width and height methods are
// width()
// height()
// innerWidth()
// innerHeight()
// outerWidth()
// outerHeight()
// outerWidth(true)
// outerHeight(true)

$(document).ready(function(){
    // width 
    $('#widthbtn').click(function(){
        // here width is in css
        $('#test1').width('500px');

        console.log('Width : ' + $('#test1').width());
        console.log('innerWidth : ' + $('#test1').innerWidth());
        console.log('outerWidth : ' + $('#test1').outerWidth());
        console.log('outerWidth(true) : ' + $('#test1').outerWidth(true));
    });

    // Height
    $('#heightbtn').click(function(){
        $('#test1').height('500px');

        console.log('Height : ' + $('#test1').height());
        console.log('innerHeight : ' + $('#test1').innerHeight());
        console.log('OuterHeight : ' + $('#test1').outerHeight());
        console.log('OuterHeight(true) : ' + $('#test1').outerHeight(true));           
    });
})