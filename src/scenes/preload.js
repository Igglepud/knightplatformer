export default class preloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  init() {}

  preload() {
    //loading box
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
    progressBox.y = this.sys.game.config.width / 2;
    progressBox.x = this.sys.game.config.height / 2;

    //create loading screen
    this.load.on("progress", function (value) {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(800, 450, 300 * value, 30);
    });

    this.load.on("complete", function () {
      console.log("complete");
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
    });

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Preparing for battle...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);
//load assets
    this.load.atlas(
      "background",
      "assets/background.png",
      "assets/background.json"
    );
    this.load.atlas("cage", "assets/cage-0.png", "assets/cage.json");
    this.load.atlas("chests", "assets/chests.png", "assets/chests.json");
    this.load.multiatlas("knight", "assets/knight.json", "assets");
    this.load.multiatlas("goblin1", "assets/goblin1.json", "assets");
    this.load.multiatlas("goblin2", "assets/goblin2.json", "assets");
    this.load.multiatlas("forest", "assets/forest.json", "assets");
    this.load.image("titleBG", "assets/titleBG.png");

    this.load.audio("swordHit", "assets/swordHit.wav");
  }

  create() {
    //create animations for use in game
    this.anims.create({
      repeat: -1,
      frameRate: 15,
      frames: this.anims.generateFrameNames("knight", {
        prefix: "__knight_6_idle_",
        start: 0,
        end: 19,
        zeroPad: 3,
      }),
      key: "knight_idle",
    });

    this.anims.create({
      repeat: -1,
      frameRate: 15,
      frames: this.anims.generateFrameNames("knight", {
        prefix: "__knight_6_walk_",
        start: 0,
        end: 11,
        zeroPad: 3,
      }),
      key: "knight_walk",
    });

    this.anims.create({
      frameRate: 15,
      frames: this.anims.generateFrameNames("goblin1", {
        prefix: "__goblin_01_idle_single_weapon_",
        start: 0,
        end: 19,
        zeroPad: 3,
      }),
      key: "goblin1_idle",
      repeat: -1,
    });

    this.anims.create({
      frameRate: 15,
      frames: this.anims.generateFrameNames("knight", {
        prefix: "__knight_6_attack_one_",
        start: 0,
        end: 7,
        zeroPad: 3,
      }),
      key: "knightAttack1",
    });

    this.anims.create({
      frameRate: 15,
      frames: this.anims.generateFrameNames("goblin1", {
        prefix: "__goblin_01_die_single_weapon_",
        start: 0,
        end: 4,
        zeroPad: 3,
      }),
      key: "goblin1Die",
    });
//start game, this should go to Title once it is working
    this.scene.start("Title");
  }
}
