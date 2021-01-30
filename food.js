class Food{
constructor(){
    this.image = loadImage("Images/Milk.png");
    this.foodStock = 0
    
}
display(){
    imageMode(CENTER);
    if (this.foodStock!==0){
        x = 80
        y = 50
        for(var i =0; i<this.foodStock; i++){

            if (i%10===0){
                x = 80
                y += 60
            }
            image(this.image,x,y,70,70);
            x = x+30
        }
    }

}
getFoodStock(){
    return this.foodStock;
}
updateFoodStock(stock){
   this.foodStock = stock;
}
deductFood(){
    if (this.foodStock>0){
      this.foodStock-1;
    }
}

}
