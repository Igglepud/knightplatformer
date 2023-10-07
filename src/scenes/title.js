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
                "animationcomplete-goblin1Die",
                function () {
                  this.cameras.main.fadeOut(1000, 0, 0, 0).on(
                    "camerafadeoutcomplete",
                    function () {
                      this.scene.start("Level1");
                    },
                    this
                  );
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

    this.titleText = this.add.text(800, 450, "Knight's Quest", {
      fontSize: "128px",
      fill: "#fff",
    });
    this.titleText.setOrigin(0.5);
    this.titleText.setStroke("#000", 6);
    this.titleText.setShadow(2, 2, "#333333", 2, true, true);
    this.titleText.setDepth(1);
    this.blinkingText = this.add.text(800, 650, "Press Spacebar to Start", {
      fontSize: "72px",
      fill: "#fff",
    });
    this.blinkingText.setOrigin(0.5);
    this.blinkingText.setStroke("#000", 3);
    this.blinkingText.setShadow(2, 2, "#333333", 2, true, true);
    this.blinkingText.setDepth(1);
    this.tweens.add({

      targets: this.blinkingText,
      alpha: 0,
      duration: 1000,
      ease: "Linear",
      repeat: -1,
      yoyo: true,
  
    })
  }
}
