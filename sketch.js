var inc = 0.01;
var start = 0;
var slider1;
var slider2;
var slider3;

function setup() {
  createCanvas(800, 800);

  slider1 = createSlider(1,16,4);
  slider2 = createSlider(1,100,5);
  slider3 = createSlider(1,100,10);
}

function draw() {
  inc = slider3.value() / 1000;
  noiseDetail( slider1.value(), (slider2.value() / 100));
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for(var x = 0; x < width; x++){
    stroke(255);
    var y = noise(xoff)*height;
    vertex(x, y);

    xoff += inc;
  }
  endShape();
  start += inc;
  //noLoop();
}
