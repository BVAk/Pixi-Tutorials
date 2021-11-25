import { Application, Sprite, Texture, Container } from 'pixi.js'

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    width: 800, 
    height: 600,
    backgroundColor: 0x1099bb, 
    resolution: window.devicePixelRatio || 1,
});
// document.body.appendChild(app.view);

const container = new Container();

app.stage.addChild(container);

// Create a new texture
const texture = Texture.from('images/bunny.png');

// Create a 5x5 grid of bunnies
for (let i = 0; i < 100; i++) {
    const bunny = new Sprite(texture);
    // bunny.anchor.set(0.5);
    bunny.x = (i % 10) * 40;
    bunny.tint = Math.random() * 0xFFFFFF ;
    bunny.y = Math.floor(i / 10) * 40;
    container.addChild(bunny);
}

// Move container to the center
container.x = app.screen.width / 2 - 50;
container.y = app.screen.height / 2 - 100;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
});
