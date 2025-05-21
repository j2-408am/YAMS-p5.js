var shapeSize = 70;
let ocean;
let loaded = false;

function preload() {
  ocean = loadSound("sounds/water.mp3"); // The Wave sound effect
}

function mouseClicked() {
  if (!ocean.isPlaying()) {
    ocean.loop();
  }
}

function setup() {
  createCanvas(500, 500); // Create a 500x500 canvas
}

function draw() {
  background("rgb(6,87,150)");

  // Create horizontal drifting motion using frameCount
  let drift = frameCount * 0.5;

  // Shift the entire grid sideways over time to create motion
  translate(drift % shapeSize, 15); // loops the movement
  translate(shapeSize / -2, shapeSize / -2); // Center each cell better

  // Loop through the grid in steps of shapeSize
  for (var x = 0; x < width; x += shapeSize) {
    for (var y = 0; y < height; y += shapeSize) {
      noStroke();

      // Animate the large blue circle using a sine wave pulse
      let pulse = map(sin(frameCount * 0.07 + x + y), -1, 1, 0.8, 1.4);
      fill("#63A3C7");
      stroke("rgb(156,186,215)");
      strokeWeight(5); // Stroke weight is added for depth
      ellipse(x, y, shapeSize * pulse, shapeSize * pulse);

      // Animated rectangle to create wave effect
      fill("#037596");
      rect(x, y, shapeSize * pulse, shapeSize * pulse);

      // Smaller central ellipse with stroke for contrast
      fill("#28888E");
      stroke("rgb(25,77,119)");
      strokeWeight(5); // Stroke weight is added for depth
      ellipse(x, y, shapeSize * 0.3, shapeSize * 0.3);

      fill("#037596");
      noStroke();
      rect(x, y, shapeSize * -0.5, shapeSize * -0.5);

      fill("#7BB1CF");
      rect(x, y, shapeSize * 0.5, shapeSize * 0.5);
    }
  }
}