

var mic, fft;

function setup() {
   createCanvas(512,400);
   noStroke();
   fill(0,255,255);

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(190,0,240);
   var spectrum = fft.analyze();
   

   
   

  
 for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 1024, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

}