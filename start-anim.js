//starting animation on site loadup
$(document).ready(function(){
    var titleCard = $(".title-card");
    titleCard.animate({ left: "200px" });
    titleCard.animate({ left: "-100px", opacity: "1" }, "fast");
    var menuOption = $(".menu-option");
    menuOption.animate({ left: "200px" }, "slow");
})