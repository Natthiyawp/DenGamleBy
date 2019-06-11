$(function(){
    var upen = $(".click"); 
    
    upen.on('click',function(){
        var knap = $(this);
        
        var text = knap.next();
        console.log(text)
        text.slideToggle("slow");
    });
});