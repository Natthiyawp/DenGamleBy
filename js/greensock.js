$(function () {
    const   start   =   $('#start');
    const   end     =   $('#end');
    console.log(start[0],end[0]);
    TweenMax.to("#start", 5, {morphSVG:"#end", ease:Back.easeOut});
});