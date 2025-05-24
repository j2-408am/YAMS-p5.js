let player;
let aliens = [];
let score = 0;
let gameOver = false;
let font;
let shipImg; // Player icon
let alienImgs = [];
let stars = []; // To make moving stars background
let bgMusic;
let musicStarted = false; // For audio/bg music

function preload() {
  font = loadFont('font/PixelifySans-Regular.ttf');
  shipImg = loadImage('media/ship.png');

  // Different aliens in the game
  alienImgs[0] = loadImage('media/alien1.png');
  alienImgs[1] = loadImage('media/alien2.png');
  alienImgs[2] = loadImage('media/alien3.png');

  // To load bg music
  bgMusic = loadSound('audio/main.mp3');
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();
  player = new Player();

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      alpha: random(50, 255), // Brightness of star
      speed: random(0.5, 1.75) // Speed of moving star
    });
  }
}

function draw() {
  background(20, 30, 40); // Main background

  // Creating the stars
  noStroke();
  
  // Stars are randomized
  for (let star of stars) {
    fill(255, 255, 255, star.alpha);
    rect(star.x, star.y, 2, 2); // Rect to make stars pixel instead of ellipse
    star.alpha += random(-10, 25);
    star.alpha = constrain(star.alpha, 50, 255); // Twinkling effect
    star.y += star.speed;
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
  }

  if (!gameOver) {
    player.show(); 
    player.move();

    // Aliens appear every 20 frames
    if (frameCount % 20 === 0) { 
      aliens.push(new Alien());
      // Score increases whenever user avoids alien
      score++;
    }

    // Displaying aliens
    for (let i = aliens.length - 1; i >= 0; i--) {
      aliens[i].move();
      aliens[i].show();

      // If user hits alien, the game ends
      if (aliens[i].hits(player)) {
        gameOver = true;
        if (bgMusic.isPlaying()) {
          bgMusic.stop(); // Stop music when game over
        }
      }
      
      if (aliens[i].offscreen()) { // Removes aliens in the screen
        aliens.splice(i, 1);
      }
    }

    fill("rgb(169,231,169)"); // Retro color
    textSize(24);
    textAlign(LEFT); // Shows score at the upper left corner
    textFont(font); // Pixel font
    text("Score: " + score, 10, 30);
  } else {
    fill("rgb(169,231,169)");
    textSize(48);
    textAlign(CENTER); // Places Game Over message at the center
    textFont(font);
    text("Game Over!", width / 2, height / 2);
    textSize(24);
    
    // Displays the user's final score
    text("Final Score: " + score, width / 2, height / 2 + 40);
    // Gives users an option to play again if they want
    text("Press R to Play Again", width / 2, height / 2 + 80);
  }
}

// To make users move their character (ship) on the screen
function keyPressed() {
  
  // Player movements, left and right
  if (keyCode === LEFT_ARROW) {
    player.setDir(-1);
  } else if (keyCode === RIGHT_ARROW) {
    player.setDir(1);
  } else if (key === 'r' || key === 'R') {
    aliens = [];
    score = 0;
    gameOver = false;
    player = new Player(); // Reset player

    if (!bgMusic.isPlaying()) {
      bgMusic.setLoop(true);
      bgMusic.play(); // Restart music on reset
    }
  }

  // Start music on first interaction if not already playing
  if (!musicStarted && bgMusic && !bgMusic.isPlaying()) {
    bgMusic.setLoop(true);
    bgMusic.play();
    musicStarted = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    player.setDir(0);
  }
}

// To let user control the character (ship)
class Player {
  constructor() {
    this.w = 50;
    this.h = 60;
    this.x = width / 2 - this.w / 2;
    this.y = height - this.h - 10;
    this.dir = 0; // Direction of movement
  }

  show() {
    imageMode(CENTER);
    image(shipImg, this.x + this.w / 2, this.y + this.h / 2, this.w, this.h);
  }

  move() {
    this.x += this.dir * 6;
    this.x = constrain(this.x, 0, width - this.w); // Makes sure character stays within the screen
  }

  setDir(d) {
    this.dir = d;
  }
}

class Alien {
  constructor() {
    this.img = random(alienImgs);
    this.x = random(width);
    this.y = 0;
    this.w = 50;
    this.h = 50;
    this.speed = 3 + score * 0.05; // Speed increases with score to make it more challenging
  }

  show() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    this.y += this.speed;
  }

  offscreen() {
    return this.y > height + this.h;
  }

  hits(player) {
    
    // Detects when character collides alien
    let d = dist(this.x, this.y, player.x + player.w / 2, player.y + player.h / 2);
    return d < (this.w + player.w) / 2;
  }
}