document.addEventListener('DOMContentLoaded', function() {

    var container = document.createElement('div');
    var width = window.innerHeight * (16 / 9);

    container.classList.add('phaser-container');
    document.body.appendChild(container);

    game = new Phaser.Game(width, window.innerHeight, Phaser.AUTO, container);
    game.debugMode = true;

    game.state.add("Boot", Boot);
    game.state.add("Preload", Preload);
    game.state.add("StartMenu", StartMenu);
    game.state.add("Level01", Level01);
    game.state.add("GameOver", GameOver);
    game.state.start("Boot");


    setTimeout(function() {
        document.getElementById("button-play").focus();
    }, 1000);

});
