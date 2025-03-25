function setup() {
  createCanvas(650,400);
  background("#E8E4DB");

  fill("#E3C589");
  noStroke(0);
  rect(50,95,550,235);
  
  push();
  fill("#1C4439");
  noStroke();
  translate(273,100);
  triangle(100,50,-50,100,25,100);
  pop();
  
  push();
  fill("rgb(74,74,74)");
  noStroke();
  translate(263,94);
  triangle(100,60,-50,100,25,100);
  pop();
  
  fill("rgb(139,131,131)");
  noStroke();
  rect(475,250,50,20);
  
  fill("rgb(6,6,6)");
  noStroke();
  ellipse(395,193,20,50)
  ellipse(410,190,20,50)
  
  fill("#1C4439");
  noStroke();
  rect(160,195,325,85);
  ellipse(198,235,200,90);
  ellipse(450,230,200,75);
  
  fill("black");
  ellipse(175,260,80,80);
  ellipse(450,260,80,80);
  
  fill("white");
  ellipse(175,260,55,55);
  ellipse(450,260,55,55);
  
  fill("black");
  ellipse(175,260,50,50);
  ellipse(450,260,50,50);
  fill("white");
  rect(150,258,50,3);
  rect(173,235,3,50);
  rect(425,258,50,3);
  rect(448,235,3,50);
  
  push();
  translate(120,210);
  rotate(radians(55));
  fill("yellow");
  stroke(0);
  strokeWeight(1);
  ellipse(0,0,20,30);
  pop();
  
  push();
  translate(185,237);
  rotate(radians(30));
  fill("white");
  noStroke(0);
  rect(1,0,3,50);
  pop();
  
  push();
  translate(160,239);
  rotate(radians(-30));
  fill("white");
  noStroke(0);
  rect(0,1,3,50);
  pop();
  
  push();
  translate(460,237);
  rotate(radians(30));
  fill("white");
  noStroke(0);
  rect(1,0,3,50);
  pop();
  
  push();
  translate(435,238);
  rotate(radians(-30));
  fill("white");
  noStroke(0);
  rect(0,1,3,50);
  pop();
  
  push();
  translate(525,215);
  rotate(radians(-70));
  fill("rgb(100,8,8)");
  stroke(0);
  strokeWeight(1);
  ellipse(0,0,20,30);
  pop();
  
  fill("#1C4439");
  stroke(0);
  strokeWeight(1);
  rect(375,208,30,8);
  
  fill("orange");
  stroke(0);
  strokeWeight(1);
  ellipse(225,225,8,8);
  
  fill("#1C4439");
  stroke(0);
  strokeWeight(1);
  rect(320,189,10,10);
  
  fill("#1C4439");
  stroke(0);
  strokeWeight(1);
  ellipse(330,187,25,15);
  
  fill("black");
  rect(595,337,3,15);
  
  fill("black");
  rect(572,337,3,15);
  
  fill("black");
  rect(557,337,3,15);
  
  fill("#E8E4DB");
  stroke(0);
  strokeWeight(3);
  ellipse(585,341,10,7);
  ellipse(585,348,10,7);
  
  fill("#E8E4DB");
  stroke(0);
  strokeWeight(3);
  ellipse(569,342,10,8);
}