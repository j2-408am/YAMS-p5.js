function setup() {
  createCanvas(515,500);
  background("#150D29"); 
  
  fill("#140644"); 
  stroke("#140644");
  rect(10,10,500,450);
  fill("#08145E"); 
  stroke("#08145E");
  rect(30,30,450,400);
  
  fill("yellow");
  stroke("#FFFF00");
  strokeWeight(2);
  ellipse(25,35,1,20);
  ellipse(25,35,20,1);
  ellipse(490,400,1,20);
  ellipse(490,400,20,1);
  ellipse(75,275,1,20);
  ellipse(75,275,20,1);
  ellipse(350,235,1,20);
  ellipse(350,235,20,1);
  ellipse(420,65,1,20);
  ellipse(420,65,20,1);
  
  fill("#B1C8F2"); 
  noStroke(0);
  ellipse(413,260,35,35);
  fill("red");
  noStroke(0);
  ellipse(413,269,60,20);
  fill("yellow");
  noStroke(0);
  ellipse(413,269,5,5);
  ellipse(400,269,5,5);
  ellipse(426,269,5,5);
  
  fill("rgb(242,237,207)");
  stroke("#A3A3B2");
  strokeWeight(10); 
  ellipse(253,700,700,700);
  
  fill("#EADBBE");
  noStroke(0);
  ellipse(255,73,50,50);
  ellipse(380,73,50,50);
  fill("#E0C442");
  noStroke(0);
  ellipse(255,73,40,40);
  ellipse(380,73,40,40);
  
  fill("#475F2B");  
  stroke("#475F2B");  
  strokeWeight(2);
  rect(250,75,10,50);
  rect(375,75,10,50);
  
  fill("#F9A700");  
  stroke("#276529");  
  strokeWeight(3);
  ellipse(255,75,30,30);
  ellipse(380,75,30,30);
  
  translate(width/1-325,100);
  beginShape();
  vertex(12,350);
  fill("#E1ABAB");  
  stroke("#FF0033");  
  strokeWeight(7);
  bezierVertex(-250,45,120,150,-30,0);
  bezierVertex(50,18,350,40,150,0);
  bezierVertex(36,15,35,25,20,100);
  vertex(120,300);
  vertex(-20,150);
  endShape();
  
  noStroke(0);
  ellipse(145,58,257,100);
  
  fill("#F0D49B");  
  ellipse(147,67,100,75);
  scale(1,2);
  fill("#ACD928");  
  stroke("#475F2B");  
  strokeWeight(2);
  ellipse(147,27,20,5);
  
  push();
  translate(77,35);
  rotate(radians(-60));
  fill("white");  
  stroke("black");  
  strokeWeight(3);
  ellipse(10,0,25,40);
  pop();
  
  push();
  translate(77,33);
  rotate(radians(-60));
  fill("black");  
  stroke("black");  
  strokeWeight(3);
  ellipse(10,0,17,35);
  pop();
  
  push();
  translate(205,17); 
  rotate(radians(60));
  fill("white");  
  stroke("black");  
  strokeWeight(3);
  ellipse(10,0,25,40);
  pop();
  
  push();
  translate(205,15);
  rotate(radians(60));
  fill("black");  
  stroke("black");  
  strokeWeight(3);
  ellipse(10,0,17,35);
  pop();
  
  push();
  fill("#F0D49B");  
  noStroke();
  translate(25,-5);
  triangle(-55,5,-5,15,-1,30);
  pop();  
  
  push();
  translate(140,21);
  rotate(radians(60));
  fill("black");  
  noStroke(0);
  ellipse(10,0,3,17);
  pop();
  
  push();
  translate(142,38);
  rotate(radians(-60));
  fill("black");  
  noStroke(0);
  ellipse(10,0,3,17);
  pop();
  
  fill("#F9A700");  
  stroke("#276529");  
  strokeWeight(1);
  ellipse(147,27,20,5);
  
  fill("white");  
  stroke("black");  
  strokeWeight(2);
  ellipse(143,11,50,13);
  
  fill("white");
  stroke("white");
  strokeWeight(2);
  ellipse(80,22,10,10);
  ellipse(210,22,10,10);
  
  fill("black");  
  stroke("black");  
  strokeWeight(2); 
  ellipse(143,11,35,10);
  fill("#FFFFFF");  
  stroke("#FFFFFF");
  ellipse(143,10,7,7);
  
  translate(-185,-23);
  rotate(radians(-50));
  fill("#F9A700"); 
  stroke("#276529"); 
  strokeWeight(4);
  ellipse(5,100,25,85);
  
  translate(75,25);
  rotate(radians(30));
  fill("#F9A700");  
  stroke("#276529");  
  strokeWeight(4); 
  ellipse(5,100,25,85);
}