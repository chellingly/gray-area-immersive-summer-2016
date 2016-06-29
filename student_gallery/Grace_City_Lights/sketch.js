var song;
var square = [];
var circle = [];

// loads first
function preload(){
  song = loadSound('assets/signal.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //Creates Audio
  song.play();
  song = new p5.AudioIn();
  
}

function draw() {
  background(0);
  
  //amplitude level to map to diam
  var volume = song.getLevel(); 
  // print(volume); 
  var h = map(volume, 0, .4, 10, 200);
  
 
    if (volume > 0.1){
      square.push(new Square(random(0,width),random(height,height/2),50,h));
    }
    else {
      circle.push(new Circle(random(0,width),random(height/4,0),h,h));
    }


  
  for(var i=0; i < circle.length; i++){
    circle[i].display();
  }
  
  for(var i=0; i < square.length; i++){
    square[i].display();
    if (volume > 0.296){
      square[i].col();
    }
    // if index value > 100, splice index by 1 (takes away the first index)
    if (square.length > 100){
      square.splice(i,1);
    }
  }   

  
}

function Square(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.display = function(){
    fill(255,70);
    rect(this.x, this.y, this.w, this.h);
  }  
  this.col = function(){
    fill(255,random(0,255),random(0,255),70);
    rect(this.x, this.y, this.w, this.h);
  }
};

function Circle(x,y,diam, diam){
  this.x = x;
  this.y = y;
  this.diam = diam;
  
  this.display = function(){
    fill(0,random(0,255),255,70);
    ellipse(this.x, this.y, this.diam, this.diam);
  } 
}