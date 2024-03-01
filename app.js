let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000 // Consider setting this to match your background
})
document.body.appendChild(app.view)

PIXI.Loader.shared.add("constellation", "path/to/your/constellation/background.webp").add("birthdayMessage", "path/to/your/birthday/message/heaven.webp").load(setup)


function setup () {
  let background = new PIXI.Sprite(PIXI.Loader.shared.resources["constellation"].texture)
  app.stage.addChild(background)

  let message = new PIXI.Sprite(PIXI.Loader.shared.resources["birthdayMessage"].texture)
  message.alpha = 0 // Initially invisible
  app.stage.addChild(message)

  // Initialize draggable stars here
}
