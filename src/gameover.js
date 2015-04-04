var GameOver = function(game) {

};

GameOver.prototype = {
    create: function(game) {

        var bg = this.game.add.sprite(0, 0, 'background');
            bg.fixedToCamera = true;
        style = {fontSize: '32px', fill: '#FFF'};
        game.add.text(this.game.width / 4, 100, 'Congratulations!\nYou made it in ' + this.game.scoreManager.getTimeElapsed() / 1000 + ' seconds', style);
        //game.add.text(16, 16, 'time: ' + this.game.scoreManager.currentTime / 1000 + ' sec ', style);
        console.log("gameOver");
        // place game over stuff here
        //var flag = this.game.add.button(this.game.width / 2, this.game.height / 2, "flag", this.playTheGame, this);

        this.inputWrapper = document.getElementById('input-wrapper');
        this.inputWrapper.classList.remove('hidden');
        this.inputField = document.getElementById('enter-nick');
        this.inputField.addEventListener('keydown', this.inputKeyDown);
        this.submitButton = document.getElementById('submit-time');
        this.submitButton.addEventListener('click', this.onClick.bind(this));
    },

    render: function() {
        if (this.inputField.value.length >= 3) {
            // Activate send button
            this.submitButton.disabled = false;
        }
        else {
            this.submitButton.disabled = true;
        }

        if (this.game.debugMode) {
            this.game.debug.text('fps: ' + this.game.time.fps, 0, 17, '#00FF00');
        }
    },
    playTheGame: function() {
        this.game.state.start("Level01");
    },
    onClick: function() {
        this.inputWrapper.classList.add('hidden');
        this.game.state.start("StartMenu");
        this.game.scoreManager.sendScore(this.inputField.value);
    },
    inputKeyDown: function(e) {
        if (e.keyCode == 13) {
            this.game.scoreManager.sendScore(this.inputField.value);
        }
    }

};
