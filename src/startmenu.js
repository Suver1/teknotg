// Create the start menu, accept settings etc.
var StartMenu = function(game) {

};

StartMenu.prototype = {
    create: function() {
        var muteButton = this.game.add.button(50, 50, "star", this.muteSound, this);
        var playButton = this.game.add.button(100, 100, "star", this.playTheGame, this);
        // Input setup
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
    }
};
