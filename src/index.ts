import { Application, Sprite, Container, Graphics } from 'pixi.js'
import { BlurFilter } from '@pixi/filter-blur';

// PIXI.useDeprecated();
// window.__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
// window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 2040,
	height: 1080,
})

let container = new Container();

app.stage.addChild(container);
let sprite = Sprite.from("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png");

sprite.width = 512;
sprite.height = 512;

// Adds a sprite as a child to this container. As a result, the sprite will be rendered whenever the container
// is rendered.
container.addChild(sprite);

// Blurs whatever is rendered by the container
container.filters = [new BlurFilter()];

// Only the contents within a circle at the center should be rendered onto the screen.
container.mask = new Graphics()
 .beginFill(0xffffff)
 .drawCircle(sprite.width / 2, sprite.height / 2, Math.min(sprite.width, sprite.height) / 2)
 .endFill();


const graphy = new Graphics();

// we give instructions in order. begin fill, line style, draw circle, end filling
graphy.beginFill(0xFF00FF);
graphy.lineStyle(10, 0x00FF00);
graphy.drawCircle(0, 0, 25); // See how I set the drawing at 0,0? NOT AT 100, 100!
graphy.endFill();

app.stage.addChild(graphy); //I can add it before setting position, nothing bad will happen.

// Here we set it at 100,100
graphy.x = 100;
graphy.y = 100;