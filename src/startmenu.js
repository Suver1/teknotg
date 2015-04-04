// Create the start menu, accept settings etc.
var StartMenu = function(game) {

};

StartMenu.prototype = {
    create: function() {
        // Input setup
        var bg = this.game.add.sprite(0, 0, 'logo');

        // Menu buttons
        var startBtn = game.add.button(90, 200, 'buttonsSprite', this.playTheGame, this, 'StartBtnHighlight.png', 'StartBtn.png', 'StartBtn.png');
        var highScoresBtn = game.add.button(90, 230, 'buttonsSprite', this.showHighScores, this, 'HightscoresBtnHightlight.png', 'HightscoresBtn.png', 'HightscoresBtn.png');
        var muteSoundBtn = game.add.button(90, 265, 'buttonsSprite', this.muteSound, this, 'muteBtnHighlight.png', 'muteBtn.png', 'muteBtn.png');

        if (window.innerWidth < 600) {
            var scale = 1.5;
            startBtn.scale.setTo(scale, scale);
            startBtn.position.x = 70;
            startBtn.position.y = 180;
            highScoresBtn.scale.setTo(scale, scale);
            highScoresBtn.position.x = 70;
            highScoresBtn.position.y = 225;
            muteSoundBtn.scale.setTo(scale, scale);
            muteSoundBtn.position.x = 70;
            muteSoundBtn.position.y = 280;
        }
    },
    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    },
    playTheGame: function() {
        this.game.state.start("Level01");
    },
    muteSound: function() {
        // mute all sound
    },
    showHighScores: function() {
        // Display high scores
    },
    onKeydown: function(e) {
        if (e.keyCode == 13)
            this.playTheGame();
    }
};
