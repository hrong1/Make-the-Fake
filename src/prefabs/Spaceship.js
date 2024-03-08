class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
    preload(){
        
    }

    create ()
    {
        this.input.on('pointermove', (pointer) =>
        {
            this.ship.x = pointer.x;
            this.ship.y = pointer.y;
            
        });

    }

    update(){
    }
}