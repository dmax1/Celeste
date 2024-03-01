let app = new PIXI.Application({
  width: window.innerWidth, // width of the canvas
  height: window.innerHeight, // height of the canvas
  backgroundColor: 0x1099bb // background color
});

document.body.appendChild(app.view);

// Load an image and add it to the stage
let sprite = PIXI.Sprite.from('assets/background.webp');

// Optional: if you want the image to cover the area without distorting its aspect ratio, you can do:
let ratio = Math.max(window.innerWidth / sprite.texture.width, window.innerHeight / sprite.texture.height);
sprite.scale.x = sprite.scale.y = ratio;
sprite.anchor.set(0.5);
sprite.position.set(window.innerWidth / 2, window.innerHeight / 2);
app.stage.addChild(sprite);


let heavenSprite = PIXI.Sprite.from('assets/heaven.webp');
heavenSprite.alpha = 0; // Start fully transparent
app.stage.addChild(heavenSprite);

// Fade in over 3 seconds
let fadeInDuration = 3000; // milliseconds
let startTime = Date.now();

function update() {
  let elapsedTime = Date.now() - startTime;
  let alpha = elapsedTime / fadeInDuration;
  heavenSprite.alpha = Math.min(alpha, 1); // Ensure alpha does not exceed 1

  if (heavenSprite.alpha < 1) {
    requestAnimationFrame(update); // Continue updating until fully visible
  }
}

requestAnimationFrame(update); // Start the fade-in process

