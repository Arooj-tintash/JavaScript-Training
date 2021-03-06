/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;




/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, 
it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can 
change the predefined score of 100. (Hint: you can read that value with the .value property in 
    JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current 
score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a 
    look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, prev, current, winnerScore;

init();

function winner(ele) {
    if(event.key === 'Enter') {
        winnerScore = ele.value;   
        // alert(winnerScore)     
    }
};



document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {

        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // Part 1
        //Check if two consecutive sixes are rolled
        //Storing Previous dice number
        if (prev === 0) {
            prev = dice;
        } else if ( current === 0) {
            current = dice;
        } else {
            prev = current;
            current = dice;
        }
        // console.log("Dice: "+dice, " Prev: "+prev +" Curr: "+ current);
        if(prev === 6 && current === 6) {
            document.getElementById('score-' +activePlayer).textContent = 0;
            // document.getElementById('current-'+ activePlayer).textContent = 0;
            nextPlayer();
        }

        //2. Display the result
        var diceDOM1 = document.querySelector('#dice-1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice + '.png';

        var diceDOM2 = document.querySelector('#dice-2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1 || dice2 !== 1) {
            //Add score
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        
        // Check if player won the game
        var input = document.querySelector('.winner-score').value;
        console.log(input)
        if(input) {
            winnerScore = input;
        } else {
            winnerScore = 100;
        }
        if (scores[activePlayer] >= winnerScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    prev = 0;
    current = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    prev = 0; 
    current = 0;
    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}