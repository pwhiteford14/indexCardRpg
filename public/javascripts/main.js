"use strict";

let cards = [`Two of Clubs`,`3 of clubs`,`4 of clubs`,`5 of clubs`,`6 of clubs`,`7 of clubs`,`8 of clubs`,`9 of clubs`,`10 of clubs`,`Jack of clubs`,`Queen of clubs`,`King of clubs`,`Ace of clubs`,`2 of diamonds`,`3 of diamonds`,`4 of diamonds`,`5 of diamonds`,`6 of diamonds`,`7 of diamonds`,`8 of diamonds`,`9 of diamonds`,`10 of diamonds`,`Jack of diamonds`,`Queen of diamonds`,`King of diamonds`,`Ace of diamonds`,`2 of hearts`,`3 of hearts`,`4 of hearts`,`5 of hearts`,`6 of hearts`,`7 hearts`,`8 of hearts`,`9 of hearts`,`10 of hearts`,`Jack of hearts`,`Queen of hearts`,`King of hearts`,`Ace of hearts`,`2 of spades`,`3 of spades`,`4 of spades`,`5 of spades`,`6 of spades`,`7 of spades`,`8 of spades`,`9 of spades`,`10 of spades`,`Jack of spades`,`Queen of spades`,`king of spades`,` Ace of spades`,`Black Joker`,`Red Joker`];



document.getElementById(`drawCard`).addEventListener("click", function roll() {

    let randCard;

    randCard = cards[Math.floor(Math.random() * cards.length)];

    console.log(randCard);
    document.getElementById('cardResult').innerHTML = "";
    document.getElementById('cardResult').innerHTML += randCard;
});


document.getElementById(`d20`).addEventListener(`click`, function () {
   let result;
   result =  Math.floor(Math.random() * 20 + 1);

    document.getElementById('results').innerHTML = "";
    document.getElementById('results').innerHTML += result;

})

document.getElementById(`d4`).addEventListener(`click`, function () {
    let result;
    result =  Math.floor(Math.random() * 4 + 1);

    document.getElementById('results').innerHTML = "";
    document.getElementById('results').innerHTML += result;

})

document.getElementById(`d6`).addEventListener(`click`, function () {
    let result;
    result =  Math.floor(Math.random() * 6 + 1);

    document.getElementById('results').innerHTML = "";
    document.getElementById('results').innerHTML += result;

})

document.getElementById(`d8`).addEventListener(`click`, function () {
    let result;
    result =  Math.floor(Math.random() * 8 + 1);

    document.getElementById('results').innerHTML = "";
    document.getElementById('results').innerHTML += result;

})

document.getElementById(`d10`).addEventListener(`click`, function () {
    let result;
    result =  Math.floor(Math.random() * 10 + 1);

    document.getElementById('results').innerHTML = "";
    document.getElementById('results').innerHTML += result;

})


document.getElementById(`d12`).addEventListener(`click`, function () {
    let result;
    result =  Math.floor(Math.random() * 12 + 1);

    document.getElementById('results').innerHTML = "";
    document.getElementById('results').innerHTML += result;

})

document.getElementById(`d100`).addEventListener(`click`, function () {
    let result;
    result =  Math.floor(Math.random() * 100+ 1);

    document.getElementById('results').innerHTML = "";
    document.getElementById('results').innerHTML += result;

})