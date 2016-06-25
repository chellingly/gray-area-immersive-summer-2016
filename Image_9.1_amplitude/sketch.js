

// var mic;
var song;
var amp;

function preload(){
  song = loadSound('assets/nowhere.mp3');
}

function setup() {
   createCanvas(512,400);
   
   
 
  
  song.play();
   song = new p5.AudioIn();// Creates Audio Input
  // song.loop();
  // mic.start();//Initializes Mic
  // amp = new p5.Amplitude();
  // amp.setInput(song);
}

function draw() {
   background(255);

   
   var vol = song.getLevel();
    var diam = map(vol, 0, .3, 70, 500);
    var col = map(vol, 0, .3, 0, 255);
  
  
   

   
   
   fill(col);
   ellipse(width/2, height/2, diam, diam);
  


}