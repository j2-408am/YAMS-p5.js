  var img, x, y;
  function preload() {
  img = loadImage("cart.PNG");
}

  function setup() {
  createCanvas(750,600);
  background(0);
  noStroke();
  image(img,0,0);
  img.resize(750,600);
  image(img,0,0);
}

  function draw() {
  background(0);
  x = mouseX;
  y = mouseY;
  image(img,0,0);
  var c = get(x,y);
  fill(c);
  ellipse(x,y,35,70);
  ellipse(x,y,70,35);
}