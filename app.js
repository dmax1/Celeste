let app = new PIXI.Application({
  width: window.innerWidth, // width of the canvas
  height: window.innerHeight, // height of the canvas
  backgroundColor: 0x100006 // background color
})

document.body.appendChild(app.view)

let clickCounter = 0
const totalStars = 6
let heavenSprite
let ratio

PIXI.Loader.shared.add('background', 'assets/background.webp').add('heaven', 'assets/heaven.webp').load((loader, resources) => {
  let sprite = new PIXI.Sprite(resources.background.texture)
  ratio = Math.max(window.innerWidth / sprite.texture.width, window.innerHeight / sprite.texture.height)
  sprite.scale.x = sprite.scale.y = ratio
  sprite.anchor.set(0.5)
  sprite.position.set(window.innerWidth / 2, window.innerHeight / 2)
  app.stage.addChild(sprite)

  heavenSprite = new PIXI.Sprite(resources.heaven.texture)
  // heavenSprite.scale.x = heavenSprite.scale.y = ratio
  // heavenSprite.anchor.set(0.5)
  // heavenSprite.position.set(window.innerWidth / 2, window.innerHeight / 2)
  // heavenSprite.alpha = 0
  // // app.stage.addChild(heavenSprite);
  //
  // // Fade in heavenSprite over 3 seconds
  // app.ticker.add((delta) => {
  //   if (heavenSprite.alpha < 1) {
  //     heavenSprite.alpha += delta / (fadeInDuration / PIXI.Ticker.shared.deltaMS)
  //   }
  // })


  let text = new PIXI.Text('Click on RED stars', { fontFamily: 'Arial', fontSize: 24, fill: 0xff1010, align: 'center' })
  text.anchor.set(0.5)
  text.position.set(300, 100) // Adjust positioning as needed
  app.stage.addChild(text)
  text.on('pointerdown', () => {
    text.visible = false // Make the text disappear on click
  })


  createClickablePoint(window.innerWidth * 0.35, window.innerHeight * 0.35);
  createClickablePoint(window.innerWidth * 0.30, window.innerHeight * 0.45);
  createClickablePoint(window.innerWidth * 0.35, window.innerHeight * 0.55);

  createClickablePoint(window.innerWidth * 0.60, window.innerHeight * 0.45);
  createClickablePoint(window.innerWidth * 0.7, window.innerHeight * 0.55);
  createClickablePoint(window.innerWidth * 0.6, window.innerHeight * 0.65);

})

let fadeInDuration = 3000 // milliseconds


function createClickablePoint (x, y) {
  let point = PIXI.Sprite.from('assets/s3.png')
  point.interactive = true // Make the sprite interactive
  point.buttonMode = true // Changes the cursor on hover
  point.anchor.set(0.5)
  point.scale.set(0.35) // Initial scale
  point.position.set(x, y)
  point.tint = 0xff2100

  point.on('pointerdown', () => {
    // Start animation
    point.alpha = 1 // Start fully transparent
    point.scale.set(1) // Overscale

    // Animate scale back to normal and fade in
    gsap.to(point, { scale: 1.5, duration: 0.5, ease: "back.out" }).then(() => {
      gsap.to(point, { alpha: 0, duration: 0.5 })
      clickCounter++
      if (clickCounter === totalStars) {
        transitionToHeaven() // Define this function to handle the transition
      }
    })
  })

  app.stage.addChild(point)
}

function transitionToHeaven () {
  heavenSprite.scale.x = heavenSprite.scale.y = ratio
  heavenSprite.anchor.set(0.5)
  heavenSprite.position.set(window.innerWidth / 2, window.innerHeight / 2)
  heavenSprite.alpha = 0
  app.stage.addChild(heavenSprite) // Make sure this is uncommented

  let birthdayText = new PIXI.Text("¡Feliz\ncumpleaños,\nCeleste!", {
    fontFamily: 'Arial',
    fontSize: 60, // Consider increasing font size for visibility
    fill: 0xffffff,
    align: 'center'
  })
  birthdayText.anchor.set(0.5)
  birthdayText.position.set(app.screen.width / 2, app.screen.height / 2)
  birthdayText.alpha = 1 // Start fully transparent
  app.stage.addChild(birthdayText)

  // Start fade-in
  gsap.to(heavenSprite, {
    alpha: 1, duration: 3

  })

  // 3 seconds fade-in

}



