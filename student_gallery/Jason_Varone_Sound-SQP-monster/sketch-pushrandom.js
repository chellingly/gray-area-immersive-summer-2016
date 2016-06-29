var fft;
var song;
var bincount = 256;
var highvol = [];


function preload(){
  song = loadSound('assets/sound-sample-edit.mp3')
}

function setup(){
  var myCanvas = createCanvas(600,700);
  myCanvas.position(400, 50);
  img = loadImage('assets/mountains.jpg');  // Load the image

  song.loop();

  fft = new p5.FFT();
  fft.setInput(song);

  amplitude = new p5.Amplitude();
}

function draw(){
  image(img, 0, 0);
  var volume = amplitude.getLevel(); 
  var spectrum = fft.analyze(bincount);
  var level = amplitude.getLevel();
  var diam = map(volume, 0, 1, 0, 50);


  for (var i =0; i < spectrum.length; i++){
    var h = map(spectrum[i], 0, 255, height, 225);
    var x = map(i, 0, bincount, 0, 1200);

    var col = map(spectrum[i], 0, 255, 0, 255);
    var col2 = map(spectrum[i], 0, 255, 100, 200);

    var size = map(level, 0, 1, 10, width);

    fill(col2, col2, col);
    rect(x, height+100, 15, h - height);

    fill(col, col, col2);
    quad(x, size, x, level, h, level, x, h);

  }



if (level > .05) {
  highvol.push(new HighVol(random(85,175),random(165,200), diam));
  highvol.push(new HighVol(random(450,525),random(150,200), diam));
  }

    for(var i=0; i < highvol.length; i++){
    highvol[i].update();
    highvol[i].display();
      
      if (highvol.length > 25) {
      highvol.splice(0,1);
    }
   
  }

  
  

}

function HighVol(x, y, diam){
  this.x = x;
  this.y = y;
  this.diam = diam;  
  
  this.update = function(){
    this.x = this.x;
    this.diam = random(100,200);
  }

  
  this.display = function(){
    //iris
    strokeWeight(1);
    stroke(0);
    fill(255);
    ellipse(this.x,this.y,this.diam,this.diam);
    //pupil
    fill(20,0,200);
    strokeWeight(4);
    stroke(255, 175, 0);
    ellipse(this.x,this.y,this.diam/4,this.diam/4);
  }
  
  
  }  
