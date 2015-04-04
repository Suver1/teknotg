// Functions for score and scoreboard
var ScoreManager = function(initialScore) {
    this.currentScore = initialScore || 0;
};

// Untill there's something else we can use as score
ScoreManager.prototype.incrementScore = function() {
    this.currentScore++;
    console.log(this.currentScore);
};

// Reset score
ScoreManager.prototype.resetScore = function() {
    this.currentScore = 0;
};

// Stores the score during the first seconds to prevent cheaters a little
ScoreManager.prototype.checkScore = function() {
    console.log('checkScore');
};

ScoreManager.prototype.getCurrentScore = function() {
    return this.currentScore;
}

// Verifies and sends the final score
ScoreManager.prototype.sendScore = function(time) {

    this.currentTime = time;

    reqwest({
        url: 'php-functions/score.php',
        method: 'POST',
        data: {
            action: 'sendScore',
            name: 'derp',
            score: this.currentScore,
            time_used: '1'
        },
        success: function(output) {
            console.log(output);
        }
    });

};

ScoreManager.prototype.getTimeElapsed = function() {
    return Date.now() - this.timeStarted;
}
ScoreManager.prototype.setTimeStarted = function () {
    this.timeStarted = Date.now();
}

// Fetches the scores to be displayed in scoreboard
ScoreManager.prototype.getScore = function() {

    /*
    reqwest({
        url: 'php-functions/score.php',
        method: 'GET',
        type: 'JSON',
        data: {
            action: 'sendScore',
            score: this.currentScore
        },
        success: function(output) {
            console.log(output);
        }
    });
     */

};
