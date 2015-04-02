// preload assets
var Preload = function(game) {

};

Preload.prototype = {
    preload: function() {
        // load loading bar - onFileComplete
        this.game.time.advancedTiming = true;
        // load assets
        this.game.load.tilemap('teknotg_testlevel02', 'assets/teknotg_testlevel02.json?_=' + (Math.random().toString().substr(0, 5)), null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('simples_pimples_32px', 'assets/simples_pimples_32px.png');
        this.game.load.image("star", "assets/star.png");
        this.game.load.image("platform", "assets/platform.png");
        this.game.load.atlasJSONHash("player1", "assets/pgmanSprite.png", "assets/pgman.json");
        this.game.load.image("diamond", "assets/diamond.png");

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
