$("#menu-btn").click(function(){
    $("#menu").toggleClass("menu-active");
});
$( window ).resize(function() {
    $("#menu").removeClass("menu-active");
});