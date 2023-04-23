window.onload=function(){
var config = {
    width: 1105,
    height: 650,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    }
}

    var game = new Phaser.Game(config);
}