
let res = 10; //must divide 500 without fraction
function setup() {
  createCanvas(500, 500);
  makeInterface();
  setupSketch();
  
}

function draw() {
  background(0,255,0);
  genNoiseMap();
  doFallOff();
  moveBuffer();
  render();
  
}

function mouseClicked() {
  drawShape(); 
  //print(mouseX,mouseY);
}

function setupSketch(){
  createPalette();
  initBuffers();
  //res = resSlider.value();
  minHeat = minHeatSlider.value()/100.0;
  maxHeat = maxHeatSlider.value()/100.0;
  falloffA = falloffASlider.value()/100.0;
  falloffB = falloffBSlider.value()/100.0;
  noise1octaves = noise1octavesSlider.value();
  noise2octaves = noise2octavesSlider.value();
  noise1freq = noise1freqSlider.value()/100.0;
  noise2freq = noise2freqSlider.value()/100.0;
  lerpnoisesval = lerpnoisesvalSlider.value()/100.0;
  smoothK = smoothKSlider.value()/100.0;
  speed = speedSlider.value()/10.0;
  
}
function initBuffers(){
  for (let i = 0; i < width*height; i++) {
    buffer1[i] = 0;
    buffer2[i] = 0;
    buffer3[i] = 0;
  }
}

