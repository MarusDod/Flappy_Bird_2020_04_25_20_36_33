var x;
var y;
var length;
var height;
var imagem;

class Tower{
  constructor(y,length1,length2,imge){
    this.x=500;
    this.y=y;
    this.length=length1;
    this.height=length2;
    this.imagem=imge;
  } 
  display(){
    image(this.imagem,this.x,this.y,this.length,this.height);
  }
  move(){
    this.x-=2; 
  }
}