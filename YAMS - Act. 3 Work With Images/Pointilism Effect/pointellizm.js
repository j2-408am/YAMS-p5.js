  var img,x,y;
  function preload () {
  img = loadImage("xmas-1.JPG");
}

  function setup() {
  createCanvas(500,500);
  background(0);
  noStroke();
  image(img,0,0);
  img.resize(500,500);
  image(img,0,0);
}

  function draw() {
  x = random(width);
  y = random(height);
  var c = img.get(x,y);
  fill(c[0],c[1],c[2],150);
  rect(x,y,35,70);
  rect(x,y,70,35);
  ellipse(x,y,70,35);
  ellipse(x,y,35,70);
}