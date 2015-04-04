// preload assets
var Preload = function(game) {

};

Preload.prototype = {
    preload: function() {
        // load loading bar - onFileComplete
        this.game.time.advancedTiming = true;
        // load assets
        this.game.load.tilemap('level01', this.cachebust('assets/teknotg_level01.json'), null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level02', this.cachebust('assets/teknotg_level02.json'), null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level03', this.cachebust('assets/teknotg_level03.json'), null, Phaser.Tilemap.TILED_JSON);
        //this.game.load.image('simples_pimples_32px', 'assets/simples_pimples_32px.png');
        this.game.load.image('iTideSprites', 'assets/iTideSprites.png');
        this.game.load.image("star", "assets/star.png");
        this.game.load.image("platform", "assets/platform.png");
        this.game.load.atlasJSONHash("player1", "assets/birdSprite.png", "assets/birdSprite.json");
        this.game.load.atlasJSONHash("buttonsSprite", "assets/buttons/menuButtonsSprite.png", "assets/buttons/menuButtonsSprite.json");
        this.game.load.image("diamond", "assets/diamond.png");
        this.game.load.image("flag", "assets/flag.png");
        this.game.load.image("clock", "assets/clock.png");
        this.game.load.image("arrowBack", "assets/arrowBack.png");
        this.game.load.image("stop", "assets/stop.png");
        this.game.load.image("logo", "assets/iTideLogo.png");
        this.game.load.image("background", "assets/iTideBG.png");

        this.game.load.audio("coin", "assets/sounds/smb_coin.wav");
        this.game.load.audio("menu", "assets/menu.mp3");
        this.game.load.audio("game", "assets/game.mp3");
    },
    create: function() {

        this.game.state.start("StartMenu");
    },
    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    },
    cachebust: function(url) {
        return url + ( this.game.debugMode ? '?_=' + (Math.random().toString().substr(0, 5)) : '' );
    }
};
