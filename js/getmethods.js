// get methods are
// text()
// html()
// attr()
// val()

$(document).ready(function(){
    // text() - This is like innerText in js
    var a = $('#test1').text();
    console.log(a);

    // html() - This is like innerHTML in js
    var b = $('#test1').html();
    console.log(b);

    // attr() - To check the names of the attributes like classname, idname,style etc..,
    var c = $('#test1').attr('class');
    console.log(c);

    var d = $('#test1').attr('id');
    console.log(d);

    // val() - Is used for the forms input value
    $('#myform').submit(function () {
        // console.log('Form Submitted');
        // console.log( 'Name is: ' + myform.name.value + ' Class is: ' + myform.class.value + ' Selected value is: ' + myform.select.value);
        // alert( 'Name is: ' + myform.name.value + ' Class is: ' + myform.class.value + ' Selected value is: ' + myform.select.value);
        var myname = $('#name').val();
        var myclass = $('#class').val();
        var myselect = $('#select').val();
        alert(myname + ' ' + myclass + ' ' + myselect);
    })
})