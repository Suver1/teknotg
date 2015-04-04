// Create the start menu, accept settings etc.
var Highscores = function(game) {

};

Highscores.prototype = {
    create: function() {

        var bg = this.game.add.sprite(0, 0, 'background');

        var backBtn = this.game.add.button(25, 300,
                                           'buttonsSprite',
                                           this.startMenu, this,
                                           'backBtnHighlight.png',
                                           'backBtn.png',
                                           'backBtn.png');

        if (window.innerWidth < 600) {
            var scale = 1.5;
            backBtn.scale.setTo(scale, scale);
            backBtn.position.x = 70;
            backBtn.position.y = 280;
        }

        this.game.scoreManager.getScore(function (result) {

            var highscores = window.JSON.parse(result.response);

            var styling = {
                "font": "sans-serif",
                "fontSize": "16px",
                "fontWeight": "bold",
                "fill": "#FFFFFF"
            };

            var position = 25;

            highscores.forEach(function(entry) {
                var text = entry.entry_date + ' - - ' + entry.score + ' - - ' + entry.name;

                position = position + 30;

                this.game.add.text(this.game.width / 2 - 100, position, text, styling);
            });

        });

    },

    render: function() {
        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    },

    startMenu: function() {
        this.game.state.start("StartMenu");
    }

};
