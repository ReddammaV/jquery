// has & is Methods
$(document).ready(function () {
    // has - Is used for inner tag selectors like bold,span,i it applies for hole tag where that tags are there
    $('p').has('span').css('background', 'red');
    
    // is - it gives boolean value
    if($('p').parent().is('div')){
        console.log($('p').parent().is('div'));
    }

    // you have to click on p (paragraph tag)
    $('p').click(function(){
        if($('p').parent().is('div')){
            console.log($('p').parent().is('div'));
            $('p').css('background', 'red');
        }
    })

})