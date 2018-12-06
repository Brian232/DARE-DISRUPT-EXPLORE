$(".imReady").click(function() {
    $("h3").show();
});

$(".yesText").mouseenter(function() {
    $(".yesImg").show();
    $(".bikiniBottom").show();
    $(".bikiniBottom").html("<h1>Welcome to Bikini Bottom</h1>");
   
});

$(".yesText").mouseleave(function() {
    $(".yesImg").hide();
    $(".bikiniBottom").hide();
    $(".bikiniBottom").html("<h1>Welcome to Bikini Bottom</h1>");
   
});
 
$(".noText").mouseenter(function() {
    $(".noImg").show();
    $(".bikiniBottom").show();
    $(".bikiniBottom").html("<h1>MAYBE NEXT TIME</h1>");
    $(".goodbye").show();
});

$(".noText").mouseleave(function() {
    $(".noImg").hide();
    $(".bikiniBottom").hide();
    $(".goodbye").hide();
});