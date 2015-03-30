// Special state used to set stage size and scale.

var boot = function(game) {
    console.log("%cStarting my awesome game", "color:white; background:red");
};

boot.prototype = {
    preload: function() {
        this.game.load.image("star", "assets/star.png");
        this.game.load.image("flag", "assets/flag.png");
        // Load loading bar asset used in preload
    },
    create: function() {
        // Set screen settings here
        this.game.state.start("Preload");
    }
}
