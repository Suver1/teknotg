// Functions for score and scoreboard
var ScoreManager = function(initialScore) {
    this.currentScore = initialScore || 0;
};

// Untill there's something else we can use as score
ScoreManager.prototype.incrementScore = function() {
    this.currentScore++;
};

// Reset score
ScoreManager.prototype.resetScore = function() {
    this.currentScore = 0;
};

ScoreManager.prototype.getCurrentScore = function() {
    return this.currentScore;
};

// Verifies and sends the final score
ScoreManager.prototype.sendScore = function(name,time) {

    reqwest({
        url: 'php-functions/score.php',
        method: 'POST',
        data: {
            action: 'sendScore',
            name: name,
            score: this.currentScore,
            time_used: this.timeElapsed
        }
    });

};

ScoreManager.prototype.getTimeElapsed = function() {
    return Date.now() - this.timeStarted;
};

ScoreManager.prototype.setTimeStarted = function () {
    this.timeStarted = Date.now();
};

// Fetches the scores to be displayed in scoreboard
ScoreManager.prototype.getScore = function(data) {

    reqwest({
        url: 'php-functions/score.php',
        method: 'GET',
        type: 'JSON',
        data: {
            action: 'getScore'
        },
        success: function(response) {
            data(response);
        }
    });

};
