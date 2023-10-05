export default class level1Scene extends Phaser.Scene {
  constructor() {
    super("Level1");
  }

  init() {}

  preload() {}

  create() {
    //add items to the screen
    this.knight = this.physics.add.sprite(100, 450, "knight", "knight_idle_1");
    this.knight.play("knight_idle");
    this.knight.setScale(0.2);
    this.knight.flipX = true;
    this.floor = this.add.tileSprite(
      800,
      850,
      1600,
      100,
      "forest",
      "repeating_tree_top_center"
    );
    this.physics.add.existing(this.floor);
    this.floor.body.setAllowGravity(false);
    this.floor.body.setImmovable();

    this.physics.add.collider(this.knight, this.floor);
//create controls
    this.controls = this.input.keyboard.createCursorKeys();
   
   //add more keys to controls
    this.controls.A = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );
    this.controls.D = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
    this.controls.W = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    );
    this.controls.S = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
  }

  update() {
//move knight according to button pressed
    if (this.controls.left.isDown || this.controls.A.isDown) {
      if (this.knight.anims.currentAnim.key !== "knight_walk") {
        this.knight.play("knight_walk");
      }
      this.knight.body.setVelocityX(-300);
      this.knight.flipX = false;
    } else if (this.controls.right.isDown || this.controls.D.isDown) {
      this.knight.body.setVelocityX(300);
      this.knight.flipX = true;
      if (this.knight.anims.currentAnim.key !== "knight_walk") {
        this.knight.play("knight_walk");
      }
    } else {
      this.knight.body.setVelocityX(0);
      if (this.knight.anims.currentAnim.key !== "knight_idle") {
        this.knight.play("knight_idle");
      }
    }
      //jump
      if (
        (this.controls.up.isDown || this.controls.W.isDown) &&
        this.knight.body.touching.down
      ) {
        console.log(this.knight);
        this.knight.body.setVelocityY(-800);
      }
    
  }
}
