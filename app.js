let app = new PIXI.Application({
  // width: window.innerWidth, // width of the canvas
  height: window.innerHeight, // height of the canvas
  backgroundColor: 0x1099bb // background color
});

document.body.appendChild(app.view);

// Load an image and add it to the stage
let sprite = PIXI.Sprite.from('assets/background.webp');


app.stage.addChild(sprite);

// // Optional: if you want the image to cover the area without distorting its aspect ratio, you can do:
// let ratio = Math.max(window.innerWidth / sprite.texture.width, window.innerHeight / sprite.texture.height);
// sprite.scale.x = sprite.scale.y = ratio;
// sprite.anchor.set(0.5);
// sprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
