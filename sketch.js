var canvas;
var backgroundImage, car1_img, car2_img, track;
var  lifeImage;

var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

// DECLARAR AS VIAVEIS DE IMAGENS 
// fuelImage, powerCoinImage,obstacle1Image, obstacle2Image;

function preload() {
  backgroundImage = loadImage("assets/planodefundo.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/PISTA.png");

// CARREGAR AS IMAGENS  



  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png");
}

function setup() {   // esta estática 

  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();



}

function draw() {  // esta em loop 
  background(backgroundImage);
  
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

