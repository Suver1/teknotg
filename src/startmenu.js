// Create the start menu, accept settings etc.
var StartMenu = function(game) {

};

StartMenu.prototype = {
    create: function() {
        /*
        var muteButton = this.game.add.button(50, 50, "star", this.muteSound, this);
        var playButton = this.game.add.button(100, 100, "star", this.playTheGame, this);
        */
        // Input setup
        var startMenuElm = document.getElementById('start-menu'),
            btnPlay = document.getElementById('button-play'),
            btnMute = document.getElementById('button-mute'),
            btnDerp = document.getElementById('button-derp');

        startMenuElm.classList.remove('hidden');
        btnPlay.addEventListener('click', this.playTheGame.bind(this));
        btnMute.addEventListener('click', this.muteSound.bind(this));
        btnDerp.addEventListener('click', function(e) { console.log('Derp'); });
        window.addEventListener('keydown', this.onKeydown);
    },
    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    },
    playTheGame: function() {
        window.removeEventListener('keydown', this.onKeydown);
        var startMenuElm = document.getElementById('start-menu');
        startMenuElm.classList.add('hidden');

        this.game.state.start("Level01");
    },
    muteSound: function() {
        // mute all sound
    },
    onKeydown: function(e) {
        if (e.keyCode == 13)
            this.playTheGame();
    }
};
