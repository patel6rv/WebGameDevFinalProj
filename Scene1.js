class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        //background images for game
        this.load.image("parallax-forest-back-trees", "assets/images/parallax-forest-back-trees.png");
        this.load.image("parallax-forest-front-trees", "assets/images/parallax-forest-front-trees.png");
        this.load.image("parallax-forest-lights", "assets/images/parallax-forest-lights.png");
        this.load.image("parallax-forest-middle-trees", "assets/images/parallax-forest-middle-trees.png");

        //adding character to game
        this.load.spritesheet('adventurer', 'assets/Adventurer-1.5/adventurer-v1.5-Sheet.png', { frameWidth: 50, frameHeight: 37, endFrame: 109});

        //load buttons
        this.load.image("Rectangle0", "assets/images/Rectangle0.png");
        this.load.image("Rectangle1", "assets/images/Rectangle1.png");
        this.load.image("Rectangle2", "assets/images/Rectangle2.png");
        this.load.image("Rectangle3", "assets/images/Rectangle3.png");
        this.load.image("Rectangle4", "assets/images/Rectangle4.png");
    }

    create() {
        let config = {
            width: 1105,
            height: 650,
        }
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}