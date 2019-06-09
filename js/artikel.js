$(function() {
    var upen = $(".article-nav ul li div:first-of-type");
    upen.on('click',function(){
        var knap = $(this);
        var text = knap.next();
        text.slideToggle("slow");
    })
})