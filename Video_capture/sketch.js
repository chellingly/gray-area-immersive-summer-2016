var video;

function setup() {
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  // video.hide();

}

function draw() {
  tint(0,0,255);
  image(video, 0, 0, width, height);
}