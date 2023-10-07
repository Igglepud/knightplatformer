import Knight from "/src/entities/knight.js";
export default class level1Scene extends Phaser.Scene {
  constructor() {
    super("Level1");
  }

  init() {}

  preload() {}

  create() {

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
    //add items to the screen
   
this.knight=new Knight(100,450,this)
    this.physics.add.collider(this.knight.knightSprite, this.floor);

  }

  update() {
    this.knight.update();
  }
}
