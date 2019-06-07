$(function(){
    "use strict";
    //more cards
    var cardList    =   newCard(3);
    
    var allCard     =   shuffleArray(cardList);
    console.log(allCard)
    $('.scene').append(allCard);
    
    var card1       =   undefined,
        card2       =   undefined,
        flip        =   "is-flipped",
        allCard     =   $("ul.scene li"),
        numberOfCard =   allCard.length,
        cardTurned  =   0;
    
    allCard.on('click',function(e){
        console.log(this)
        var thisBrik    =   $(this);
        // init opstart den føste brik bilver defineret
        if(card1 === undefined && card2 === undefined){
            card1 = thisBrik;
            card1.addClass(flip);
        }
        //Hvis card2 er undefined og
        //Hivs denne brik ikke er den samme som den forgåene
        else if(card2   === undefined && !thisBrik.is(card1)){
            card2 = thisBrik;
            card2.addClass(flip);
            var isSameValue =   identicalCard(card1,card2);
            if(isSameValue) {
                cardTurned  =   cardTurned+2;
                if(cardTurned   === numberOfCard){
                    tjecVictory();
                }
                card1 = undefined;
                card2 = undefined;
                }
            else{
                resetCard(card1, card2);
                card1 = undefined
                card2 = undefined
                //consle.log("hej")
            }
            }
        })
    function resetCard(card1, card2){
        var t= setTimeout(function(){
            card1.removeClass(flip);
            card2.removeClass(flip);
        },1000)
    }
             
    function identicalCard(card1,card2){
        var a = card1.data('pair');
        var b = card2.data('pair');
        console.log(a,b);
        if(a===b){
            return true;
        }
        else{
            return false;
        }
    }
    function tjecVictory(){
        $('<h2 class="VICTORY">VICTORY</h2>').appendTo('body');
    }
    function newCard(number){
        //only even numbers
        if(number%2===0){
            var cardList    =   [];
            var cardValue   =   0;
            for(var i=1;i<=number;i++){
                var modola  =   i%2;
                if(modola   ==  1){cardValue++}
                //cardFace front
                var card = $('<li class="card" data-pair='+cardValue+'><div class="cardFace front">Front</div><div class="cardFace back"> <h2>'+cardValue+'<h2></div></li>');
                cardList.push(card)
            }
            return cardList;
        }
             
        else{return false}
    }
    function shuffleArray(array)    {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp =array[i];
            array[i]    = array[j];
            array[j]    = temp;
        }
        return array;
    }
})