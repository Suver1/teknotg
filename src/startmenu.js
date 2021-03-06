// Create the start menu, accept settings etc.
var StartMenu = function(game) {

};

StartMenu.prototype = {
    create: function() {
        // Input setup
        var bg = this.game.add.sprite(0, 0, 'logo');

        this.backgroundMusic = this.game.add.audio('menu');
        this.backgroundMusic.volume = this.muteAllSounds ? 0 : 0.6;
        this.backgroundMusic.play();

        // Menu buttons
        var startBtn = this.game.add.button(90, 200, 'buttonsSprite', this.playTheGame, this, 'startBtnHighlight.png', 'startBtn.png', 'startBtn.png');
        var highScoresBtn = this.game.add.button(90, 230, 'buttonsSprite', this.showHighScores, this, 'highScoresBtnHighlight.png', 'highScoresBtn.png', 'highScoresBtn.png');
        var muteSoundBtn = this.game.add.button(90, 265, 'buttonsSprite', this.muteSound, this, 'muteBtnHighlight.png', 'muteBtn.png', 'muteBtn.png');

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
        //window.removeEventListener('keydown', this.onKeydown);
        /*
        var startMenuElm = document.getElementById('start-menu');
        startMenuElm.classList.add('hidden');
        */

        this.backgroundMusic.stop();
        this.game.scoreManager.setTimeStarted();
        this.game.state.start("Level01");
    },
    muteSound: function() {
        // mute all sound
        this.backgroundMusic.stop();
        this.game.muteAllSounds = true;
    },
    showHighScores: function() {
        this.game.state.start("Highscores");
    },
    onKeydown: function(e) {
        if (e.keyCode == 13)
            this.playTheGame();
    }
};
