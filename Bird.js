var x;
var y;
var length;
var height;
var velocity;
var acceleration;
var jumpTimer;

class Bird{
  
constructor(x,y,length,height){
 this.x=x;
 this.y=y;
 this.length=length;
 this.height=height;
 this.velocity=-10;
 this.acceleration=1;
 this.jumpTimer=0;
}
  
display(){
 var temping;
  if(this.velocity<0) temping=imgBirdFly;
  else if(this.velocity>7) temping=imgBirdFall;
  else temping=imgBird;
 image(temping,this.x,this.y,this.length,this.height); 
}
move(){
  if(keyIsPressed && keyCode==87 && (millis()-this.jumpTimer)>180){
    this.jumpTimer=millis();
    this.velocity=-14;
    tururu.play();
  }
  if(!(this.y+this.velocity<=0 || this.y+this.length+this.velocity>=frameY)){
  this.velocity+=this.acceleration;
  }
  else this.velocity=0;
  if(this.velocity>30) this.velocity=10;
  this.y+=this.velocity;
}
}