export default class titleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  init() {}

  preload() {}

  create() {
    let bg = this.add.image(800, 450, "titleBG");
    this.knight = this.add.sprite(400, 450, "knight", "__knight_6_idle_000");
    this.goblin = this.add.sprite(
      800,
      525,
      "goblin1",
      "__goblin_01_idle_single_weapon_010"
    );

    this.knight.flipX = true;

    this.knight.play("knight_idle");
    this.goblin.play("goblin1_idle");
    //this begins the game by pressing spacebar, could use
    // this.input.on("pointerdown", function () {}  to use mouse
    this.input.keyboard.on(
      "keydown-SPACE",
      function () {
        this.knight.play("knightAttack1").on(
          "animationupdate",
          function () {
            if (this.knight.anims.currentFrame.index == 6) {
              this.sound.play("swordHit");
              this.goblin.play("goblin1Die").on(
                "animationcomplete",
                function () {
                  this.cameras.main.fadeOut(1000, 0, 0, 0);
                },
                this
              );
            }
          },
          this
        );
      },
      this
    );
  }
}
