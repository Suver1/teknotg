document.addEventListener('DOMContentLoaded', function() {

    var container = document.createElement('div');
    var width = window.innerHeight * (16 / 9);

    container.classList.add('phaser-container');
    document.body.appendChild(container);

    var windowRatio = window.innerWidth / window.innerHeight;
    var width, height;

    /*
    if (windowRatio > 1.5) {
        width = Math.floor(window.innerHeight*(16/9));
        height = Math.floor(window.innerHeight);
    } else {
        width = Math.floor(window.innerWidth);
        height = Math.floor(window.innerWidth/(16/9));;
    }
    */

    width = 800;
    height = 450;

    console.log('Width: ' + width + ', height: ' + height);
    game = new Phaser.Game(width, height, Phaser.AUTO, container);
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
