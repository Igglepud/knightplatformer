export default class Knight {

constructor(x,y,scene){

    this.knightSprite = scene.physics.add.sprite(100, 450, "knight", "knight_idle_1");
    this.knightSprite.play("knight_idle");
    this.knightSprite.setScale(0.2);
    this.knightSprite.flipX = true;
    this.knightSprite.body.setSize(300,450).setOffset(250,200);



//create controls
this.controls = scene.input.keyboard.createCursorKeys();
   
//add more keys to controls
 this.controls.A = scene.input.keyboard.addKey(
   Phaser.Input.Keyboard.KeyCodes.A
 );
 this.controls.D = scene.input.keyboard.addKey(
   Phaser.Input.Keyboard.KeyCodes.D
 );
 this.controls.W = scene.input.keyboard.addKey(
   Phaser.Input.Keyboard.KeyCodes.W
 );
 this.controls.S = scene.input.keyboard.addKey(
   Phaser.Input.Keyboard.KeyCodes.S
 );

}


update(){


//move knight according to button pressed
if (this.controls.left.isDown || this.controls.A.isDown) {
    if (this.knightSprite.anims.currentAnim.key !== "knight_walk") {
      this.knightSprite.play("knight_walk");
    }
    this.knightSprite.body.setVelocityX(-300);
    this.knightSprite.flipX = false;
  } else if (this.controls.right.isDown || this.controls.D.isDown) {
    this.knightSprite.body.setVelocityX(300);
    this.knightSprite.flipX = true;
    if (this.knightSprite.anims.currentAnim.key !== "knight_walk") {
      this.knightSprite.play("knight_walk");
    }
  } else {
    this.knightSprite.body.setVelocityX(0);
    if (this.knightSprite.anims.currentAnim.key !== "knight_idle") {
      this.knightSprite.play("knight_idle");
    }
  }
    //jump
    if (
      (this.controls.up.isDown || this.controls.W.isDown) &&
      this.knightSprite.body.touching.down
    ) {
      this.knightSprite.body.setVelocityY(-800);
    }
  if(!this.knightSprite.flipX){    this.knightSprite.body.setOffset(400,200);
  }else{


    this.knightSprite.body.setOffset(250,200);
  }


}



}