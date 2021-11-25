import { Application, BitmapFont, BitmapText, TextStyle, Text, Sprite } from 'pixi.js'
import { BlurFilter } from "@pixi/filter-blur";
const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    width: 800, 
    height: 600,
    backgroundColor: 0x1099bb, 
    resolution: window.devicePixelRatio || 1,
});
// document.body.appendChild(app.view);
const styly: TextStyle = new TextStyle({
    align: "center",
    fill: "#754c24",
    fontSize: 42
});
const texty: Text = new Text('私に気づいて先輩！', styly); // Text supports unicode!
texty.text = "This is expensive to change, please do not abuse";
texty.position.y = 100;

app.stage.addChild(texty);
BitmapFont.from("comic 32", {
    fill: "#ffffff", // White, will be colored later
    fontFamily: "Comic Sans MS",
    fontSize: 32
})

// Remember, this font only has letters and numbers. No commas or any other symbol.
const bitmapTexty: BitmapText = new BitmapText("I love baking, my family, and my friends",
    {
        fontName: "comic 32",
        fontSize: 32, // Making it too big or too small will look bad
        tint: 0xFF0000 // Here we make it red.
    });

bitmapTexty.text = "This is cheap";
bitmapTexty.text = "Change it as much as you want";

app.stage.addChild(bitmapTexty);

// import the filters
// If you are using pixijs < 6 you might need to import `filters`

// Make your filter
const myBlurFilter = new BlurFilter();
const clampy: Sprite = Sprite.from("images/clampy.png");

clampy.anchor.set(0.5);

// Add it to the `.filters` array of any DisplayObject
clampy.filters = [myBlurFilter];

// setting it to "the middle of the screen
clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);