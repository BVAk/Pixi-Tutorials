import { Application, Sprite, Container } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480,
})

const conty: Container = new Container();
conty.x = 200;
conty.y = 0;
app.stage.addChild(conty);

const clampy: Sprite = Sprite.from("images/clampy.png");
clampy.x = 10;
clampy.y = 100;

// clampy.anchor.set(0.5);

// clampy.x = app.screen.width / 2;
// clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);

