//starting animation using jquery on site loadup
$(document).ready(function(){
    //startup
        var titleCard = $(".title-card");
        titleCard.animate({ left: "0.4em" });
        titleCard.animate({ left: "-=1em", opacity: "1" }, "fast");
        var menuOption = $(".menu-option");
        menuOption.animate({ left: "0.8em" }, "slow");
        optionAnim(menuOption);


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

//kill transition element

function optionAnim(options) {
    options.eq(0).animate({ left: "-=0.8em", opacity: "1" }, 150, function(){
        optionAnim(options.slice(1)); //slice off first element
    })
}