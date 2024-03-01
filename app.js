let app = new PIXI.Application({
  width: window.innerWidth, // width of the canvas
  height: window.innerHeight, // height of the canvas
  backgroundColor: 0x1099bb // background color
});

document.body.appendChild(app.view);

// // Load an image and add it to the stage
// let sprite = PIXI.Sprite.from('assets/background.webp');
//
// // Optional: if you want the image to cover the area without distorting its aspect ratio, you can do:
// let ratio = Math.max(window.innerWidth / sprite.texture.width, window.innerHeight / sprite.texture.height);
// sprite.scale.x = sprite.scale.y = ratio;
// sprite.anchor.set(0.5);
// sprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
// app.stage.addChild(sprite);
//
//
// let heavenSprite = PIXI.Sprite.from('assets/heaven.webp');
// let heavenSpriteRatio = Math.max(window.innerWidth / heavenSprite.texture.width, window.innerHeight / heavenSprite.texture.height);
// heavenSprite.scale.x = heavenSprite.scale.y = heavenSpriteRatio;
// heavenSprite.anchor.set(0.5);
// heavenSprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
// heavenSprite.alpha = 0; // Start fully transparent
// app.stage.addChild(heavenSprite);
//
// // Fade in over 3 seconds
// let fadeInDuration = 3000; // milliseconds
// let startTime = Date.now();
//
// function update() {
//   let elapsedTime = Date.now() - startTime;
//   let alpha = elapsedTime / fadeInDuration;
//   heavenSprite.alpha = Math.min(alpha, 1); // Ensure alpha does not exceed 1
//
//   if (heavenSprite.alpha < 1) {
//     requestAnimationFrame(update); // Continue updating until fully visible
//   }
// }
//
// requestAnimationFrame(update); // Start the fade-in process


PIXI.Loader.shared
.add('background', 'assets/background.webp')
.add('heaven', 'assets/heaven.webp')
.load((loader, resources) => {
  let sprite = new PIXI.Sprite(resources.background.texture);
  let ratio = Math.max(window.innerWidth / sprite.texture.width, window.innerHeight / sprite.texture.height);
  sprite.scale.x = sprite.scale.y = ratio;
  sprite.anchor.set(0.5);
  sprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
  app.stage.addChild(sprite);

  let heavenSprite = new PIXI.Sprite(resources.heaven.texture);
  heavenSprite.scale.x = heavenSprite.scale.y = ratio;
  heavenSprite.anchor.set(0.5);
  heavenSprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
  heavenSprite.alpha = 0;
  app.stage.addChild(heavenSprite);

  // Fade in heavenSprite over 3 seconds
  app.ticker.add((delta) => {
    if (heavenSprite.alpha < 1) {
      heavenSprite.alpha += delta / (fadeInDuration / PIXI.Ticker.shared.deltaMS);
    }
  });
});

let fadeInDuration = 3000; // milliseconds

