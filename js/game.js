// create a new scene 
let gameScene = new Phaser.Scene('Game');

// initiate scene parameters
gameScene.init = function(){
    // Here we could declare player speed and other variables

};

// load assets
gameScene.preload = function () {
    // Here we could load sprites, audio and etc.

};

// called after the preload ends
gameScene.create = function () {
    // Here we can create our game objects
    this.add.text(240,20, `Let's make a game!`);

};

// our main gameloop in a sense (update() is called up to 60 times per second) 60FPS sound familiar? 
gameScene.update = function(){

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
