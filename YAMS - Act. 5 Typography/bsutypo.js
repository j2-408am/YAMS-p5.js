let font;
let points = [];

function preload() {
  font = loadFont('Orbitron-Regular.ttf'); // futuristic font
}

function setup() {
  createCanvas(875, 300);
  noStroke();

  points = font.textToPoints('Bath Spa University', 17, 155, 75, {
    sampleFactor: 0.25
  });
}

function draw() {
  background("rgb(5,5,63)"); // deep space-like background

  // Digital background shapes for futuristic effect
  stroke("rgba(31,253,0,0.31)");
  strokeWeight(1);
  fill("rgba(31,253,0,0.69)");
  for (let i = 0; i < 12; i++) {
    rect(random(width), random(height), random(7), random(3));
    ellipse(random(width/2), random(height/15), random(7), random(3));
  }

  noStroke();

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    // Wave animation for glowing text
    let waveOffset = sin(frameCount * 0.08 + p.x * 0.08) * 10;
    let y = p.y + waveOffset;

    // Glow effect using rectangles
    stroke(random(100,255), random(100,255), random(100,255), 180); // Randomized colors for glitch effect
    noFill();
    rect(p.x, y, 10, 10);

    stroke("rgb(60,236,239)"); // Main Outline
    noFill();
    rect(p.x, y, 4, 4);
  }
}
