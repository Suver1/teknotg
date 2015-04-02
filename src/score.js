// Functions for score and scoreboard
var ScoreManager = function(initialScore) {
    this.currentScore = initialScore || 0;
}

// Checks the score midways to prevent cheaters
ScoreManager.prototype.checkScore = function() {
    console.log('checking score');
}

// Untill there's something else we can use as score
ScoreManager.prototype.incrementScore = function() {
    this.currentScore++;
}

// Verifies and sends the final score
ScoreManager.prototype.sendScore = function() {
    console.log('sending score');
    console.log(this.currentScore);
}
