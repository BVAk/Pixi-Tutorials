import { Application, Sprite, Container } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 2040,
	height: 1080,
})

const conty: Container = new Container();
conty.x = 200;
conty.y = 0;
app.stage.addChild(conty);

const clampy: Sprite = Sprite.from("images/clampy.png");
clampy.x = 10;
clampy.y = 100;
conty.addChild(clampy);

const conty2: Container = new Sprite();
conty2.x = 600;
conty2.y = 0;
conty.addChild(conty2);

const clampy2: Sprite = Sprite.from("images/clampy.png");
clampy2.x = 100;
clampy2.y = 100;
conty2.addChild(clampy2);

const clampy3: Sprite = Sprite.from("images/clampy.png");
clampy3.x = 100;
clampy3.y = 300;
conty2.addChild(clampy3);

conty.rotation = 90;
