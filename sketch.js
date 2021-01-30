var dog,sadDog,happyDog;
var food,feed,addFood;
var foodStock;
var x,y;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database(); 
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  food = new Food();
  foodstockref = database.ref('foodStock');
  foodstockref.on("value",readFoodstock);
feed =createButton('feed');
       feed.position(650,400);
       feed.mousePressed(feedDog);
addFood =createButton('add Food');
       addFood.position(690,400);
       addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  drawSprites();
  food.display();
   
}

function readFoodstock(data){
  foodStock=data.val();
  food.updateFoodStock(foodStock);
}

function addFoods(){
  foodStock++;
  database.ref('/').update({
    foodStock:foodStock
})


}
function feedDog(){
  dog.addImage(happyDog);
  if (food.getFoodStock()<=0){
food.updateFoodStock(0); 
  }
  else {
    food.updateFoodStock(food.getFoodStock()-1);
  }
  database.ref('/').update({
    foodStock:food.getFoodStock()
  })
}

