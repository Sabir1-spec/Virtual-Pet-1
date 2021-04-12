var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
	normalDogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/happydog.png")
}

function setup() {
  
  database = firebase.database();

	createCanvas(500, 500);

  dog = loadImage("normalDogImg");
  happyDog = loadImage("happyDogImg");
  image(dog,200,200);
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock, showError);
  
}


function draw() {  
  background("black");

  
  drawSprites();
  //add styles here

}

function readStock() {

}

function showError() {
  
}



