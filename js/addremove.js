// CSS Class Methods are
// 1. addClass()
// 2. removeClass()
// 3. toggleClass()

$(document).ready(function(){
    // addClass()
    $('#addbtn').click(function(){
        // $('#test1').addClass('bg-primary bg-info')
        $('#test1').addClass('bg-info')
    })

    // removeClass()
    $('#removebtn').click(function(){
        $('#test1').removeClass('bg-info')
    })

    // toggleClass()
    $('#togglebtn').click(function(){
        $('#test1').toggleClass('bg-info')
    })
})