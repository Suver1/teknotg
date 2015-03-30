// preload assets

var preload = function(game) {}

preload.prototype = {
    preload: function() {
        // load loading bar
        // load assets
        this.game.load.image("star", "assets/star.png");

    },
    create: function() {
        console.log("preload");
        this.game.state.start("StartMenu");
    }
}
