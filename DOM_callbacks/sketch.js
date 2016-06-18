var bgcolor;
var button;
// var bigger;


function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("go go go go");// create button element
  button.mousePressed(changeColor);

  
}

function changeColor() {
  bgcolor = color(random(255))
  // bigger = random(20,50);
  
}

// function mousePressed() {
//   changeColor();
// }


function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  rect(100,100,50,50);
  // rect(100, 100, bigger, bigger);

}