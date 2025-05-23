let word = "Bath Spa University";
let word2Part1 = "Make Your Ambitions Happen. Make It At ";
let word2Link = "Bath Spa"; // This part will be a clickable link
let x = 0; // For animation of the reveal effect
let easing = 0.07;

let fonts = [];
let currentFontIndex = 0; // Font changes every 2 seconds
let lastChangeTime = 0;

// Offscreen graphics layers
let bgLayer;
let textLayer;

// Variables to store link position and size
let linkX, linkY, linkW, linkH;

function preload() {
  fonts[0] = loadFont('Fonts/Lora-Regular.ttf');
  fonts[1] = loadFont('Fonts/Jersey10-Regular.ttf');
  fonts[2] = loadFont('Fonts/PlaywriteHU-Regular.ttf');
  fonts[3] = loadFont('Fonts/Changa-Bold.ttf');
  fonts[4] = loadFont('Fonts/MartianMono-Regular.ttf');
  fonts[5] = loadFont('Fonts/VollkornSC-Regular.ttf'); // Used for word2
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  strokeWeight(3);

  // Background layer draw random shapes
  bgLayer = createGraphics(windowWidth, windowHeight);
  bgLayer.background("rgb(10,0,40)");

  // Create a layer for text that will be masked by the reveal rectangle
  textLayer = createGraphics(windowWidth, windowHeight);
}

function draw() {
  // Add new shapes every 50 frames
  if (frameCount % 50 === 0) {
    bgLayer.stroke(random(421), random(532), random(133));
    bgLayer.fill(random(421), random(300), random(133));
    bgLayer.rect(random(width), random(height), random(20), random(10));
    bgLayer.ellipse(random(width), random(height), random(10), random(10));
  }

  // Display the background layer
  image(bgLayer, 0, 0);

  // Different fonts every 2 seconds
  if (millis() - lastChangeTime > 2000) {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    lastChangeTime = millis();
  }

  // Title text with changing fonts
  noStroke();
  fill("white");
  textFont(fonts[currentFontIndex]);
  textSize(95);
  text(word, width / 2, height / 2.5 + 30);

  // X-position of the rectangle follows the mouse
  let targetX = mouseX;
  x += (targetX - x) * easing;

  // Dimensions for the text reveal area
  let revealW = 200;
  let revealH = 75;
  let revealY = height / 1.87;

  // Draw word2 text onto a separate layer for masking
  textLayer.clear();
  textLayer.textAlign(CENTER);
  textLayer.textFont(fonts[5]);
  textLayer.textSize(55);
  textLayer.fill(255);
  textLayer.text(word2Part1 + word2Link, width / 2, height / 1.5 - 40);

  // Get a portion of the text layer where the reveal rectangle is
  let reveal = textLayer.get(x, revealY, revealW, revealH);
  image(reveal, x, revealY); // Show it on the main canvas

  // Rectangle for revealing hidden text
  noFill();
  stroke("rgb(175,185,212)");
  rect(x, revealY, revealW, revealH);

  // Inserting BSU link
  // Find the position of the "Bath Spa" portion in the sentence
  let centerX = width / 2;
  let centerY = height / 1.5 - 40;

  textFont(fonts[5]);
  textSize(55);
  let w1 = textWidth(word2Part1); // width of the first part
  let w2 = textWidth(word2Link);  // width of the link text

  // Calculate the x/y of the link's bounding box
  linkX = centerX - textWidth(word2Part1 + word2Link) / 2 + w1;
  linkY = centerY - 40; // Top position of text
  linkW = w2;
  linkH = 50; // height of the clickable area

  // If mouse is over "Bath Spa", change cursor and highlight it
  if (mouseX > linkX && mouseX < linkX + linkW && mouseY > linkY && mouseY < linkY + linkH) {
    cursor(HAND); // change mouse cursor
    fill("rgb(166,168,215)"); // hover color
    noStroke();
    text(word2Link, linkX + linkW / 2, centerY); // draw highlighted text
  } else {
    cursor(ARROW); // default cursor
  }
}

// If the user clicks on the "Bath Spa" text, it opens a new tab
function mousePressed() {
  if (mouseX > linkX && mouseX < linkX + linkW && mouseY > linkY && mouseY < linkY + linkH) {
    window.open("https://bathspa.ac.ae/", "_blank"); // Open BSU AE website
  }
}