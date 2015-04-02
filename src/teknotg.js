document.addEventListener('DOMContentLoaded', function() {

    var container = document.createElement('div');
    container.classList.add('phaser-container');
    document.body.appendChild(container);

    game = new Phaser.Game(800, 450, Phaser.AUTO, container);
    game.debugMode = true;

    game.state.add("Boot", Boot);
    game.state.add("Preload", Preload);
    game.state.add("StartMenu", StartMenu);
    game.state.add("Level01", Level01);
    game.state.add("GameOver", GameOver);
    game.state.start("Boot");


    setTimeout(function() {
        document.getElementById("button-play").focus();
    }, 500);
    setTimeout(function() {
        document.getElementById("button-play").focus();
    }, 1000);

});
