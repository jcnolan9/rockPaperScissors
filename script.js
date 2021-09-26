var options = ["r", "p", "s"];
var wins =0;
var ties =0;
var losses =0; 

function computerChoose () {
    var compNum = Math.floor(Math.random()*3);
    return options[compNum];
}

function enterChoice () {
    var userPick = prompt("Enter your choice: \"R\" for rock, \"P\" for paper, \"S\" for scissors").toLowerCase();
    if(userPick != "s" && userPick != "p" && userPick != "r") {
        return enterChoice();
    }
    return userPick;
}

function playGame() {
    var userPick = enterChoice();
    var compPick = computerChoose();
    
    if(userPick == compPick) {
        ties++;
        alert("You chose " + userPick.toUpperCase() + "\n" + "The computer chose " + 
        compPick.toUpperCase() +  "\n" + "It's a tie!"  + "\nWins: " + wins + "\nLosses: " + losses + 
        "\nTies: " + ties);
    }
    else if(userPick == "r" && compPick == "p") {
        losses++;
        alert("You chose " + userPick.toUpperCase() + "\n" + "The computer chose " + 
        compPick.toUpperCase() + "\nYou lost!" + "\nWins: " + wins + "\nLosses: " + losses + 
        "\nTies: " + ties);
    }
    else if(userPick == "r" && compPick == "s") {
        wins++;
        alert("You chose " + userPick.toUpperCase() + "\n" + "The computer chose " + 
        compPick.toUpperCase() +"\nYou win!" + "\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    }
    else if(userPick == "p" && compPick == "r") {
        wins++;
        alert("You chose " + userPick.toUpperCase() + "\n" + "The computer chose " + 
        compPick.toUpperCase() +"\nYou win!" + "\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    }
    else if(userPick == "p" && compPick == "s") {
        losses++;
        alert("You chose " + userPick.toUpperCase() + "\n" + "The computer chose " + 
        compPick.toUpperCase() +"\nYou lost!" + "\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    }
    else if(userPick == "s" && compPick == "r") {
        losses++;
        alert("You chose " + userPick.toUpperCase() + "\n" + "The computer chose " + 
        compPick.toUpperCase() +"\nYou lost!" + "\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    }
    else if(userPick == "s" && compPick == "p") {
        wins++;
        alert("You chose " + userPick.toUpperCase() + "\n" + "The computer chose " + 
        compPick.toUpperCase() +"\nYou win!" + "\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    }

    if(window.confirm("Do you want to play again?")) {
        playGame();
    }
    else {
        alert("Final Score" + "\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    }
}

if(window.confirm("Hey, are you ready to play rock, paper, scissors?")) {
    playGame();
}
else {
    alert("Ok, come back when you're ready to play!");
}


