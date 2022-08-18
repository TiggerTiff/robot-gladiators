
// function to generate a random numeric value
var randomNumber = function(min , max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}; 

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP"  to choose.');


    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    
    var promptFight = promptFight.toLowerCase();

    //if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {

        // confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd liket to quit?");

    // if yes (true), subtract a fee and  leave fight 
    if (confirmSkip) {

         // subtract money from playerMoney for skipping 
         playerInfo.money = Math.max(0, playerInfo.money - 10);

        window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
       shop()
    

        // return true if player wants to leave
        return true;
     }

    }
    return false;
 }



// Define fight function
var fight = function(enemy) {
    while(enemy.health > 0 && enemyInfo.health > 0) {
     // ask player if they'd like to fight or run
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 
  // if player choses to "Skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
 
  //if yes (true), leave fight
  if (confirmSkip) {
     window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
         //subtract money from playerMoney for skipping
         playerInfo.money = Math.max (0, playerInfo.money - 10);
         console.log("playerInfo.money", playerInfo.money); 
     break;
  }
 
 }
// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money );
    }
    else {
        window.alert("You've lost your robot in battle.");
    
    }
    // ask player if they'd like to play again
    var playerAgainConfirm = window.confirm("Would you like to play again?");

    if (playerAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};

// function to generate a random numeric value
var randomNumber = function() {
    var value = Math.floor(Math.random() *21) + 40;

    return value;
};


var shop = function () {
   // ask player what they'd like to do 
   var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE , or 3 for LEAVE.");
    var shopOptionPrompt = parseInt(shopOptionPrompt);

    // use switch to carry out action
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE youe attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    )
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
        break;
        case 2:
         playerInfo.upgradeAttack();
        break; 
        case 3:
        window.alert("Leaving the store.");
        break;
        default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;

    }

};

// function to set name
var getPlayerName = function() {

    var name = "";

 while (name === "" || name === null) {
    name = prompt("What is you robot's name?");
 }

    console.log("Your robot's name is " + name);
    return name;

};

// Player's Information
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
       this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, // comma!
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enought money!");
        }

    }, //comma!
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enought money!");
        }  
    }
};

var enemyInfo = [
    { 
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber (10, 14)
    }
    
    ];

// function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            var pickedEnemyObj = enemyInfo[i];

             pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);
        }

        // if player is still alive and we're not at the last enemy is the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            
            // if yes, take them to the store() function
            if (storeConfirm) {
                shop();
                
            }

        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
// after the loop ends, player is either out of health or enemies to fight, so run  the endGame function
endGame();

};



for (var i = 0; i < enemyInfo.length; i++) {
    // call fight function with enemy-robot
}

// function to generate a random numeric value
var randomNumber = function() {
    var value = Math.floor(Math.random() *21) + 40;

    return value;
};




// generate random damage value based on player's attack power
var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

enemy.health = Math.max(0, enemy.health- damage);

// check enemy's health
if (enemy.health <= 0) {
    window.alert(enemy.name + ' has died!');

    //award player money for winning
    playerInfo.money = playerInfo.money + 20;
    // leave while() loop since enemy is dead
    break;
  } else {
    window.alert(enemy.health + ' still has ' + enemy.health + ' health left.');
  }

// generate random damage value based on enemy's attack power
var damage = randomNumber(enemy.attack - 3, enemy.attack);

playerInfo.health = Math.max(0, playerInfo.health - damage);

// check player's health
if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + ' has died!');
    // leave while () loop if player is dead
    break;
}else{
    window.alert(playerInfo.name+ ' still has ' + playerInfo.health + ' health left.');
}

} // end of while

}; // end of fight function

// start the game when the page loads
// startGame();

