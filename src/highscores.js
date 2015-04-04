// Create the start menu, accept settings etc.
var Highscores = function(game) {

};

Highscores.prototype = {
    create: function() {

        var bg = this.game.add.sprite(0, 0, 'background');

        var backBtn = this.game.add.button(25, 300, 'buttonsSprite', this.startMenu, this, 'backBtnHighlight.png', 'backBtn.png', 'backBtn.png');

        if (window.innerWidth < 600) {
            var scale = 1.5;
            backBtn.scale.setTo(scale, scale);
            backBtn.position.x = 70;
            backBtn.position.y = 280;
        }



        var highscores = this.game.scoreManager.getScore();


        console.log(highscores);


    },
    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    },
    startMenu: function() {
        this.game.state.start("StartMenu");
    },
    onKeydown: function(e) {
        if (e.keyCode == 13)
            this.playTheGame();
    }
};
