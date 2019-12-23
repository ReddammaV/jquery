// on() - On method is used to write multiple functions for the same element it is useful
// off() - off mehod is used to remove functions from on method where we need

$(document).ready(function(){
    // $('#test1').on("mouseover,mouseleave", function(){
    //     $(this).toggleClass("text-danger");
    //     console.log('sdf');
    // })

    $('#test1').on({
        "click" : function(){
            $(this).addClass("bg-danger");
        },
        "mouseover" : function(){
            $(this).addClass("bg-primary");
        },
        "mouseleave" : function(){
            $(this).addClass("bg-info");
        }
    });

    // button for off() - is used to remove those functions defined
    $('#removestyle').click(function(){
        $('#test1').off("mouseover mouseleave");
    })
})