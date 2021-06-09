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
  background("green");
 
	if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  
  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}



