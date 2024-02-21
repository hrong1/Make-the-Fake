/*
Name: Haorong Rong
Game title: 
*/


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics:{
        default: 'arcade',
        arcade:{
            debug: true
        }
    },
    scene: [ Menu, Play, End ]
}

let game = new Phaser.Game(config)

