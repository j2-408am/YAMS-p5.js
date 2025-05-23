const sound = new SimplePlayer("sounds/thecure.mp3");
let analyzer = new Tone.Waveform(1024); 
sound.toDestination(); sound.connect(analyzer);
let loaded = false;
let bgImg;
let font;

function preload() {
  bgImg = loadImage("images/web.png");
  font = loadFont('font/PixelifySans-Regular.ttf'); // Pixel font
}

function setup() {
  createCanvas(600,600);
}

function draw() {
  image(bgImg, 0, 0, width, height); // Background image

  if (!loaded) {
    fill("rgb(54,142,2)");
    textSize(40);
    textFont(font);
    text("loading...", 250, 300);
    return; // stop draw here
  }

  let waveform = analyzer.getValue();

  push();
  translate(width / 1.85, height / 2.125);
  
  noFill();
  stroke("rgb(245,222,4)");
  strokeWeight(2);
  drawingContext.shadowBlur = 15;
  drawingContext.shadowColor = "rgba(255, 144, 0, 0.7)";
  
  noFill();
  beginShape();
  let points = floor(waveform.length / 36);
  for (let i = 0; i < waveform.length; i += points) {
    let phi = map(i, 0, waveform.length, 0, 360);
    let radius = map(waveform[i], -1, 1, 0, width / 5);
    let x = radius * cos(phi);
    let y = radius * sin(phi);

    stroke("rgb(79,11,93)");
    line(0, -10, x, y);

    stroke("rgb(245,222,4)");
    vertex(x, y);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function mouseClicked(){
  if(loaded){
    sound.start();
  }
}

Tone.loaded().then(function(){

  loaded = true;

});