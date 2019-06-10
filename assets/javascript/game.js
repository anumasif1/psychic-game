//array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userInput = "";
var wins = 0;
var losses = 0;
var remainingGuess = 5;
//on load function
window.onload = function () {
    //pick letter random
    //console.log letter
    //var for win, losses,guessletter,remainingguess
    //randomletter

    guessLetter = letters[Math.floor(Math.random() * letters.length)];
    guessLetter = guessLetter.toLowerCase();
    console.log(guessLetter);

    //on key up function
    //invalid
    //if userinput==guessletter (win)
    // if not equals(losses)
    //calculate remaining guess
}
    
    window.onkeyup = function () {
        if (remainingGuess > 0){
        var userInput = event.key.toLowerCase();
        console.log(userInput);
        if (letters.indexOf(userInput) == -1) {
            document.getElementById("message").innerHTML = "Invalid Input!"
        }
        else if (userInput == guessLetter) {
            wins++;
            document.getElementById("win").innerHTML = "Wins: "+ ""+wins;
            document.getElementById("message").innerHTML = ""
            guessLetter = letters[Math.floor(Math.random() * letters.length)];
            guessLetter = guessLetter.toLowerCase();
            console.log(guessLetter);
        }
        else if (userInput != guessLetter) {
            losses++
            document.getElementById("loss").innerHTML ="Losses:"+ ""+losses;
            remainingGuess--
            document.getElementById("guess-left").innerHTML = "Remaining Guesses:"+""+remainingGuess;
            document.getElementById("message").innerHTML = ""
        }

        }
    }


    //function reset() {
    //  document.getElementById("win").innerHTML() = ""
    //document.getElementById("loss").innerHTML() = ""
    //document.getElementById("remaining-guess").innerHTML() = ""
    //document.getElementById("user-guess").innerHTML() = ""
    // }
    //<div class="guess-message">Guess what letter I am thinking of </div>
    //<div class="winning" id="win">Wins: </div>
    //<div class="losses" id="loss">Losses: </div>
    //<div class="remaining" id="remaining-guess">Guesses Left:</div>
    //<div class="guessed" id="user-guess"> Your Guesses so far:</div>
    //}
    //}
    //if no. exceeds then show letter and stop
    //calculate win and losses
    //add to previous win and losses
    //reset
