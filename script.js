var timer = 30;
var score = 0;
var timeElem = document.querySelector('#timeElem');
var hitElem = document.querySelector('#hitElem');
var scoreElem = document.querySelector('#scoreElem');
var mid = document.querySelector('#mid');

var guess;

setInterval(function(){
    if(timer > 0){
        --timer;
        timeElem.textContent = timer;
    }

    else{
        mid.innerHTML = '<h1 id="center">Game Over</h1>';
    }
},1000);



function makeBubbles(){
    for(var i=0; i<119; i++){
        randomNumber = Math.floor(Math.random()*10);
        var template = `<div class="bubbles">${randomNumber}</div>`;
        mid.innerHTML += template;
    }
}


function guessNumber(){
   guess = Math.floor(Math.random()*10);
   hitElem.textContent = guess;
};

mid.addEventListener('click', function(details){
    var clickedbubvalue = details.target.textContent;
    if(clickedbubvalue == guess){
        score = score + 10;
        scoreElem.textContent = score;
        guessNumber();
        mid.innerHTML = '';
        makeBubbles();
    }

    else{
        guessNumber();
        mid.innerHTML = '';
        makeBubbles();
    }
})

guessNumber();

makeBubbles();