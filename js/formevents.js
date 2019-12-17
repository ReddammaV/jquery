// form events are
// focus()
// blur()
// change()
// select()
// submit()

$(document).ready(function () {
    // focus()
    $('#name,#class,#select').focus(function () {
        $(this).css('background', 'lime');
    })

    // blur()
    $('#name,#class,#select').blur(function () {
        $(this).css('background', '');
    })

    // change()
    $('#select').change(function () {
        $(this).css('background', 'red');
        // we've define the value
        var a = $(this).val();
        $('#text').html(a);
    })

    // select() - after text input is filled with if you select that text on that time it will fire
    $('#name,#class').select(function () {
        $(this).css('background', 'orange');
    })

    // submit()
    $('#myform').submit(function () {
        // var a = $(this).val();
        // $('#text').html(a);

        console.log('Form Submitted');
        console.log( 'Name is: ' + myform.name.value + ' Class is: ' + myform.class.value + ' Selected value is: ' + myform.select.value);
        alert( 'Name is: ' + myform.name.value + ' Class is: ' + myform.class.value + ' Selected value is: ' + myform.select.value);

    })
    
})