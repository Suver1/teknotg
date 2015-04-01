// preload assets

var Preload = function(game) {}

Preload.prototype = {
    preload: function() {
        // load loading bar
        // load assets
        this.game.load.image("star", "assets/star.png");
        this.game.load.image("platform", "assets/platform.png");
        this.game.load.atlasJSONHash("player1", "assets/pgmanSprite.png", "assets/pgman.json");

    },
    create: function() {
        console.log("preload");
        this.game.state.start("StartMenu");
    }
}
