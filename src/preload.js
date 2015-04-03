// preload assets
var Preload = function(game) {

};

Preload.prototype = {
    preload: function() {
        // load loading bar - onFileComplete
        this.game.time.advancedTiming = true;
        // load assets
        this.game.load.tilemap('level01', 'assets/teknotg_level01.json?_=' + (Math.random().toString().substr(0, 5)), null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level02', 'assets/teknotg_level02.json?_=' + (Math.random().toString().substr(0, 5)), null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('simples_pimples_32px', 'assets/simples_pimples_32px.png');
        this.game.load.image("star", "assets/star.png");
        this.game.load.image("platform", "assets/platform.png");
        this.game.load.atlasJSONHash("player1", "assets/pgmanSprite.png", "assets/pgman.json");
        this.game.load.image("diamond", "assets/diamond.png");
        this.game.load.image("flag", "assets/flag.png");
        this.game.load.image("stop", "assets/stop.png");

        this.game.load.audio("coin", "assets/sounds/smb_coin.wav");

    },
    create: function() {
        console.log("preload");
        this.game.state.start("StartMenu");
    },
    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    }
};
