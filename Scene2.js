var text = "Score: ";
let score = 0;
let scoreBoard;
let message;
var collisionCheck = false;

//pattern and player moves
let gamePattern = [0, 0, 1, 3, 4, 1, 2, 1, 3, 3, 4, 2, 3, 4, 0, 4, 2, 3, 2, 1, 2, 4, 0, 3, 1, 0, 4, 1, 0, 0, 2, 1, 3, 4, 4, 4, 4, 2, 4, 3, 2, 3, 3, 2, 2, 1, 0, 3, 4, 2, 4, 4, 2, 0, 0, 2, 4, 1, 1, 4, 0, 0, 4, 0, 3, 0, 2, 3, 1, 3, 0, 1, 4, 4, 2, 3, 2, 4, 2, 0, 3, 3, 3, 4, 3, 4, 3, 4, 0, 1, 0, 2, 0, 2, 2, 4, 4, 1, 3, 1]
let playerMoves = [];
let moveCount = 0;

//platforms
let rect0;
let rect1;
let rect2;
let rect3;
let rect4;

//gameRunning
var run = true;



class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        //background images for game
        this.loadBackground();

        //score display
        scoreBoard = this.add.text(10, 15, text + score, {font: "25px Arial", fill: "black"});
        message = this.add.text(430, 325, "", {font: "50px Arial", fill: "white"});


        //add keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();

        //adding character to game
        this.addCharacter();

        this.createFloorButtons();
    }

    loadBackground(){
        this.background = this.add.image(0, 0, "parallax-forest-back-trees");
        this.background.setOrigin(0, 0);
        this.background = this.add.image(0, 0, "parallax-forest-lights");
        this.background.setOrigin(0, 0);
        this.background = this.add.image(0, 0, "parallax-forest-middle-trees");
        this.background.setOrigin(0, 0);
        this.background = this.add.image(0, 0, "parallax-forest-front-trees");
        this.background.setOrigin(0, 0);
    }

    addCharacter(){
        let config = {
            width: 1105,
            height: 650,
        }

        //adding character to game
        this.adventurer = this.physics.add.sprite(config.width/2, config.height/1.25, "adventurer").setScale(2.5);
        this.adventurer.setCollideWorldBounds(true);
        //this.adventurer.setBounce(0.2);
        
        //character animations
        this.anims.create({
            key: "idle",
            framerate: 1,
            frames: this.anims.generateFrameNumbers("adventurer", { start: 0, end: 3}),
            repeat: 1
        });

        this.anims.create({
            key: "run",
            framerate: 2,
            frames: this.anims.generateFrameNumbers("adventurer", { start: 8, end: 13}),
            repeat: 1
        });

        this.anims.create({
            key: "jump",
            framerate: 2,
            frames: this.anims.generateFrameNumbers("adventurer", { start: 14, end: 23}),
            repeat: 1
        });

        this.anims.create({
            key: "fall",
            framerate: 2,
            frames: this.anims.generateFrameNumbers("adventurer", { start: 22, end: 23}),
            repeat: 1
        });

        this.anims.create({
            key: "land",
            framerate: 2,
            frames: this.anims.generateFrameNumbers("adventurer", { start: 15, end: 14}),
            repeat: 1
        });
    }

    createFloorButtons(){
        //create platforms on floor
        this.rect0 = this.physics.add.staticGroup();
        this.rect1 = this.physics.add.staticGroup();
        this.rect2 = this.physics.add.staticGroup();
        this.rect3 = this.physics.add.staticGroup();
        this.rect4 = this.physics.add.staticGroup();

        rect0 = this.rect0.create(111, 643, 'Rectangle0');
        rect1 = this.rect1.create(332, 642, 'Rectangle1');
        rect2 = this.rect2.create(553, 644, 'Rectangle2');
        rect3 = this.rect3.create(774, 646, 'Rectangle3');
        rect4 = this.rect4.create(995, 644, 'Rectangle4');

        this.physics.add.collider(this.adventurer, this.rect0, function(adventurer, rect0){
            if(collisionCheck){
                console.log("red");
                moveCount++;
                playerMoves.push(0);

                //game logic
                if(playerMoves[moveCount-1] == gamePattern[moveCount-1]){
                    score++;
                    scoreBoard.setText(text + score);
                    if(score == 100){
                        message.setText("You Win");
                    }
                } else{
                    message.setText("Game Over");
                    scoreBoard.setText(text + "X");
                }

                collisionCheck = false;
            }
        });
        this.physics.add.collider(this.adventurer, this.rect1, function(adventurer, rect1){
            if(collisionCheck){
                console.log("orange");
                moveCount++;
                playerMoves.push(1);

                //game logic
                if(playerMoves[moveCount-1] == gamePattern[moveCount-1]){
                    score++;
                    scoreBoard.setText(text + score);
                    if(score == 100){
                        message.setText("You Win");
                    }
                } else{
                    message.setText("Game Over");
                    scoreBoard.setText(text + "X");
                }

                collisionCheck = false;
            }
        });
        this.physics.add.collider(this.adventurer, this.rect2, function(adventurer, rect2){
            if(collisionCheck){
                console.log("yellow");
                moveCount++;
                playerMoves.push(2);

                //game logic
                if(playerMoves[moveCount-1] == gamePattern[moveCount-1]){
                    score++;
                    scoreBoard.setText(text + score);
                    if(score == 100){
                        message.setText("You Win");
                    }
                } else{
                    message.setText("Game Over");
                    scoreBoard.setText(text + "X");
                }

                collisionCheck = false;
            }
        });
        this.physics.add.collider(this.adventurer, this.rect3, function(adventurer, rect3){
            if(collisionCheck){
                console.log("green");
                moveCount++;
                playerMoves.push(3);

                //game logic
                if(playerMoves[moveCount-1] == gamePattern[moveCount-1]){
                    score++;
                    scoreBoard.setText(text + score);
                    if(score == 100){
                        message.setText("You Win");
                    }
                } else{
                    message.setText("Game Over");
                    scoreBoard.setText(text + "X");
                }

                collisionCheck = false;
            }
        });
        this.physics.add.collider(this.adventurer, this.rect4, function(adventurer, rect4){
            if(collisionCheck){
                console.log("blue");
                moveCount++;
                playerMoves.push(4);

                //game logic
                if(playerMoves[moveCount-1] == gamePattern[moveCount-1]){
                    score++;
                    scoreBoard.setText(text + score);
                    if(score == 100){
                        message.setText("You Win");
                    }
                } else{
                    message.setText("Game Over");
                    scoreBoard.setText(text + "X");
                }

                collisionCheck = false;
            }
        });
    }

    update()
    {
        const speed = 300;       
        
        //movement for idle sprite
        if (this.cursors.left.isDown){
            this.adventurer.setVelocityX(-speed);
            this.adventurer.flipX = true;
            if(this.adventurer.body.touching.down){
                this.adventurer.play("run", true);
            }
        }
        else if (this.cursors.right.isDown){
            this.adventurer.setVelocityX(speed);
            this.adventurer.flipX = false;
            if(this.adventurer.body.touching.down){
                this.adventurer.play("run", true);
            }
        }
        else if (this.cursors.up.isDown && this.adventurer.body.touching.down){
            this.adventurer.setVelocityY(-speed*1.75);
            collisionCheck = true;
        } 
        else if (this.cursors.up.isDown){
            this.adventurer.play("jump", true);
        } 
        else if(!this.adventurer.body.touching.down){
            if(this.adventurer.body.velocity.y > 0){
                this.adventurer.play("fall", true);
            }
            if(this.adventurer.body.position.y > 500){
                this.adventurer.play("land", true);
            }
        }
        else{
            this.adventurer.setVelocityX(0);
            this.adventurer.play("idle", true);
        }

        this.input.on('pointerdown', () => {
            this.scene.start("bootGame");
            score = 0;
            scoreBoard.setText(text + score);
        });
    }
}