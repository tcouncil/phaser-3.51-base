// create a new scene 
let gameScene = new Phaser.Scene('Game');

// config the game
let config = {
    type: Phaser.AUTO, // Phaser will use WebGL if availabe, if not it will use Canvas for rendering
    width: 640,
    height: 360,
    scene: gameScene
};

// create a new game, pass the config
let game = new Phaser.Game(config);
