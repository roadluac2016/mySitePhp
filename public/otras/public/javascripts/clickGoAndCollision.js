var x;
var y;
$('article').each(function(index){
    $(this).click(function(){
        $(this).addClass('selected') ;
        x = $(this).offset().left;
        y = $(this).offset().top;
    })
    });

$('img').each(function(index){
    var xi = $(this).offset().left;
    var yi = $(this).offset().top;
    $(this).css('left', xi);
    $(this).css('top', yi);
    $(this).click(function(){
         $(this).animate({
    left: x,
    top: y
         })
    })

});