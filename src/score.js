// Functions for score and scoreboard
var current_score;

function start_score() {
    current_score = 0;
}


// Checks the score midways to prevent cheaters
function check_score() {
    console.log('checking score');
}


// Untill there's something else we can use as score
function update_score() {
    current_score += 1;
}


// Verifies and sends the final score
function send_score() {
    console.log('sending score');
    console.log(current_score);
}
