let saveButton;

function setup() { 
  createCanvas(500, 500);
  background("rgb(38,11,94)");
  
  // Create save button
  saveButton = createButton('Save My Art');
  saveButton.position(10, 10);
  saveButton.mousePressed(() => saveCanvas('my_drawing', 'png'));
} 


function draw() {
  // My mouse trails
  stroke("rgb(245,233,255)");
  strokeWeight(1);
  fill("rgb(245,233,255)");
  frameRate(20);
  // Creates a star-like shape
  ellipse(mouseX, mouseY, 5, 10);
  ellipse(mouseX, mouseY, 10, 5);
  
  // Faint background to create trail effect
  fill(18, 35, 105, 3); 
  noStroke();
  rect(0, 0, width, height);

  // Drawing shapes based on mouseX and mouseY
  stroke("rgb(225,50,202)");
  fill("black");
  ellipse(100, 500, mouseX, mouseY);
  ellipse(250, 250, mouseX, mouseY);

  stroke("rgb(3,100,251)");
  fill("rgb(53,29,104)");
  ellipse(120, 60, mouseX, mouseY);
}