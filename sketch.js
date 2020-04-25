var bird;
var imgBird;
var imgBirdFall;
var imgBirdFly;
var imgTop;
var imgBot;
var backgroundImg;
let frameX=500;
let frameY=500;
var tower = new Array();
let score=0;
var torin;
var tururu;
var counter=0;

function preload(){
   tururu = loadSound('131660__bertrof__game-sound-correct.wav');
   torin = loadSound('Winchester12-RA_The_Sun_God-1722751268.mp3');
}

function setup(){
  createCanvas(frameX,frameY);
  let height=150;
  imgBird = loadImage('flappy.png');
  imgBirdFall = loadImage('flappyfall.png');
  imgBirdFly = loadImage('flappyfly.png');
  imgTop = loadImage('Layer 2.png');
  imgBot = loadImage('Layer 3.png');
  backgroundImg = loadImage('b2b084ad6061dfe2122302266ea8af58.jpg'); 
  tower.push(new Tower(-5,50,height,imgTop));
  tower.push(new Tower(frameY-height,50,height,imgBot));
  bird = new Bird(50,200,40,30);
  delay(2000);
}

function draw(){
  if(!gameOver(tower)){
  background(backgroundImg);
  bird.move();
  for(i=0;i<tower.length;i++){
  tower[i].move();
  }
  textSize(36);
  text(score,50,50);
  for(i=0;i<tower.length;i++){
  if(tower[i].x==-tower[i].length){
    tower.splice(i,2);
    }
  }
    if(bird.x>tower[0].x){
      if(counter==0){
        score++; 
        counter=1;
        torin.play(); 
      }
    
    }
    else counter=0;
  if(tower[tower.length-1].x<370){
    height1=rand(100,180)+(score*2);
    height2=rand(100,180);
    tower.push(new Tower(-5,50,height1,imgTop));
    tower.push(new Tower(frameY-height1,50,height1,imgBot));
  }
  }else{
    text("GAME OVER",140,200);
    text("Score: ",180,300);
    text(score,300,300);
  }
    for(i=0;i<tower.length;i++){
  tower[i].display();
  }
  bird.display();
}

function gameOver(tower){
    if(bird.y+bird.length>=frameY) return true;
  else{
   for(var i=0;i<tower.length;i++){   if(collideRectRect(bird.x,bird.y,bird.length,bird.height,tower[i].x,tower[i].y,tower[i].length,tower[i].height)) return true;
  }}
  return false;
}

function rand(min,max){
  return (Math.random()*(max-min))+min; 
}
function delay(max){
  let tempo=millis();  
  while(millis()-tempo< max){}
}