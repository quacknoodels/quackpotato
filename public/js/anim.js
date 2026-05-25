//starting animation on site loadup
$(document).ready(function(){
    //startup
    /*$(".transition").animate({
        left: "-200em",
        width: "0",
        height: "25rem"
    }, "slow");
    $(".transition").animate({
        height: "0"
    },"1");
    */
    var transitionSlides = $(".transition");
    transitionAnim(transitionSlides);
    var titleCard = $(".title-card");
    titleCard.animate({ left: "0.5em" });
    titleCard.animate({ left: "-=1em", opacity: "1" }, "fast");
    var menuOption = $(".menu-option");
    menuOption.animate({ left: "0.5em" }, "slow");
    optionAnim(menuOption);
    //menuOption.animate({ left: "-=0.8em", opacity: "1" }, "fast");

    //option hover
    $(".menu-option").hover(
        function() {
            $(this).animate({
                color: "#6a45cf",
                "font-size": "2.4rem",
                "background-color": "#c4d7fa"
            }, 50);
        },
        function() {
            $(this).animate({
                color: "#c4d7fa",
                "font-size": "2rem",
                "background-color": "transparent"
            }, 50);
        }
    )
})

function transitionAnim(slides) {
    slides.eq(0).animate({
        left: "-200em",
        width: "0",
        height: "25rem"
    }, {duration:"slow", queue: false});
    slides.eq(0).animate({ height: "0" },{duration:"slow", queue: false, complete: function(){
        transitionAnim(slides.slice(1)); //slice off first element
    }});
}

function optionAnim(options) {
    options.eq(0).animate({ left: "-=0.8em", opacity: "1" }, 150, function(){
        optionAnim(options.slice(1)); //slice off first element
    })
}