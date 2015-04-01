document.addEventListener('DOMContentLoaded', function() {
    var container = document.createElement('div');
    container.classList.add('phaser-container');
    container.style.position = 'absolute';
    container.style.top = 0;
    container.style.height = '100%';
    document.body.appendChild(container);
    var width = window.innerHeight*(320/480);
    game = new Phaser.Game(width, window.innerHeight, Phaser.AUTO, container);

    game.state.add("Boot", Boot);
    game.state.add("Preload", Preload);
    game.state.add("StartMenu", StartMenu);
    game.state.add("Level01", Level01);
    game.state.add("GameOver", GameOver);
    game.state.start("Boot");
});
