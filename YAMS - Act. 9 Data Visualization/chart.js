let table;
let platforms = [];
let users = [];
let font;

function preload() {
  // In a different file to make the code easier to read & organized
  table = loadTable('snsdata.csv', 'csv', 'header');
  font = loadFont('AncizarSerif-Regular.ttf'); // From Google Fonts
}

function setup() {
  createCanvas(750, 500);
  background("black"); 

  // Extract data from table
  for (let r = 0; r < table.getRowCount(); r++) {
    platforms.push(table.getString(r, 0));
    users.push(table.getNum(r, 1));
  }

  drawGraph();
}

function drawGraph() {
  background("black");  
  textFont(font);
  
  fill("#F4DABB"); 
  textSize(22);
  textAlign(LEFT);
  text("Most Used Social Media Platforms in the UAE", 55, 50);

  let margin = 80;
  let barWidth = 60;
  let spacing = (width - 1 * margin) / platforms.length;

  // Grid lines
  for (let i = 0; i <= 15; i += 5) {
    let y = map(i, 0, 15, height - 80, 80);
    stroke(80);
    line(margin - 10, y, width - margin + 10, y);
    noStroke();
    fill(180); 
    textAlign(RIGHT);
    textSize(12);
    text(i + "M", margin - 15, y + 4);
  }

  // X-axis
  stroke(200);
  line(margin - 20, height - 80, width - margin + 20, height - 80);
  noStroke();

  for (let i = 0; i < platforms.length; i++) {
    let x = margin + i * spacing;
    let barHeight = map(users[i], 0, 15, 0, height - 150);

    // Shadow
    fill("rgb(222,244,153)"); 
    rect(x + 2, height - 78 - barHeight, barWidth, barHeight, 8);

    // Bar with color gradient
    fill(map(i, 0, platforms.length, 50, 270), 180, 120);
    
    // Adjusting the corner of the rectangle
    rect(x, height - 80 - barHeight, barWidth, barHeight, 10);

    // Labels for Social Media
    fill(255); 
    textSize(14);
    textAlign(CENTER);
    textSize(platforms[i].length > 8 ? 10 : 12);
    text(platforms[i], x + barWidth / 2, height - 50);
    
    // Label next to the number
    textSize(12);
    text(users[i] + "M", x + barWidth / 2, height - 90 - barHeight);
  }
}