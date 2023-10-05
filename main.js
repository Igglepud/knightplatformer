import preloadScene from "./preload.js";
import titleScene from "./title.js";
import level1Scene from "./level1.js";

// set game configuration
let config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
  },
  width: 1600,
  height: 900,
  scene: [preloadScene, titleScene, level1Scene],
  pixelArt: false,
  backgroundColor: 0x0000ff,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
       debug: true,
    },
  },
};
//create new game and send configuration
let game = new Phaser.Game(config);
