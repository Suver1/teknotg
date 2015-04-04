// Special state used to set stage size and scale.

var Boot = function(game) {

};

Boot.prototype = {
    preload: function() {
        this.game.load.image("star", "assets/star.png");
        this.game.load.image("flag", "assets/flag.png");
        // Load loading bar asset used in preload
    },
    create: function() {
        // Set screen settings here
        this.game.state.start("Preload");
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    }
};
