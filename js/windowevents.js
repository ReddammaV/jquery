// window events are

// load() and unload() are there upto 3.0 version after that it is not there
// load()
// unload()

// important events are below two
// scroll()
// resize()

$(document).ready(function () {
    // scroll() - this for window scroll
    // $(window).scroll(function(){
    //     console.log('You are scrolling');
    // })

    // scroll() - this for id div scroll
    $('#test1').scroll(function(){
        console.log('You are scrolling');
    })

    // resize() - this for window resize
    $(window).resize(function(){
        console.log('You are resizing');
    })

    // NOTE:Below methods not work in above jquery 3.0 - it gives error
    // load() - this will fire on load 
    // $(window).load(function(){
    //     console.log('You are resizing');
    // })

    // unload() - this will fire on unload(means on closing browser)
    // $(window).unload(function(){
    //     console.log('You are resizing');
    // })

})