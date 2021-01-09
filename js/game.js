// create a new scene 
let gameScene = new Phaser.Scene('Game');

// load assets
gameScene.preload = function () {

};

// called after the preload ends
gameScene.create = function () {
    this.add.text(240,20, `Let's make a game!`);
};

// config the game
let config = {
    type: Phaser.AUTO, // Phaser will use WebGL if availabe, if not it will use Canvas for rendering
    width: 640,
    height: 360,
    scene: gameScene
};

// create a new game, pass the config
let game = new Phaser.Game(config);
