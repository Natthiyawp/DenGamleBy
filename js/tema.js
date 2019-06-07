$(function () {
    "use script";
    // Antal kort
    var cardList        =   newCard(12);
    // Bland kortene
    var allCard = shuffleArray(cardList);
    // Append card(li) til ul
    $('.scene').append(allCard);
    var card1           =   undefined,
        card2           =   undefined,
        flip            =   "is-flipped",
        allCard         =   $("ul.scene li"),
        numberOfCard    =   allCard.length,
        cardTurned      =   0;

    allCard.on('click', function(e) {
        var thisBrik    =   $(this);
        console.log(card1);
        console.log(card2);
        //Vælge brik 1, hvis både kort 1 og kort 2 er undefined
        if(card1 === undefined && card2 === undefined) {
            card1   =   thisBrik;
            card1.addClass(flip);
        }
        // Hvis card2 er undefinded og
        // hvis denne brik ikke er den samme som den forgående
        else if(card2 === undefined && !thisBrik.is(card1)) {
            card2   =   thisBrik;
            card2.addClass(flip);
            //Tjek efter om kort 1 og 2 er ens
            var isSameValue =   identicalCard(card1, card2);
            if(isSameValue) {
                //Ændre værdien på antal vendte kort med +2
                cardTurned  =   cardTurned+2;
                // Tjek efter om alle kort er vendt
                if(cardTurned == numberOfCard) {
                    tjekVictory();
                }
                //Reset kort 1 og kort 2
                card1   =   undefined;
                card2   =   undefined;
            } else {
                //Resetter kort 1 og kort 2 og fjerner klassen is-flipped
                resetCard(card1, card2);
                card1   =   undefined;
                card2   =   undefined;
            }
        }
    })
    // Fjern klassen is-flipped fra kort 1 og kort 2
    function resetCard(card1, card2) {
        var t   =   setTimeout(function () {
            card1.removeClass(flip);
            card2.removeClass(flip);
        // Sæt tiden
        }, 1000)
    }
    //Læs værdien fra data inde i HTML'en
    function identicalCard(card1, card2) {
        var a   =   card1.data('b');
        var b   =   card2.data('b');
        console.log(a,b);
        if(a===b) {
            //Når par er fundet gør så man ikke kan
            //klikke på den igen
            card1.off();
            card2.off();
            return true;
        } else {
            return false;
        }
    }
    //Skriv Victory inde i HTML'en
    function tjekVictory() {
        $('<h2 class="victory">VICTORY</h2>').appendTo('body');
    }
    // Lav et nyt "kort"
    function newCard(number) {
        //Check for om tallet er et lige eller ulige tal
        if(number%2==0) {
            var cardList    =   [];
            var cardValue   =   0;
            for(var i=1;i<=number;i++) {
                var modola  =   i%2;
                if(modola == 1) {cardValue++}
                // Variable - Classen der skal indsættes i HTML
                var card = $('<li class="card" data-pair='+cardValue+'><div class="cardFace front">Front</div><div class="cardFace back"><h2>'+cardValue+'</h2></div></li>');
                // Indsæt et kort ind i HTML
                cardList.push(card)
            }
            return cardList;
        }
        else{return false}
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random()    *   (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
})