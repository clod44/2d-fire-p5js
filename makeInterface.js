
function makeInterface() {
  //one time computing
  //Sliders and texts
  var x = 10;
  var y = height + 10;
  var xoff = 0;
  var yoff = 10;
  var margin = 25;
  var msg;
  /*
  resSlider = createSlider(1, 20, 10); //resolution
  resSlider.position(x + xoff, y + yoff);
  resSlider.style("width", "260px");
  msg = createP("resolution (1,20)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  */
  minHeatSlider = createSlider(0, 100, 0); //minHeat
  minHeatSlider.position(x + xoff, y + yoff);
  minHeatSlider.style("width", "260px");
  msg = createP("minHeat (0,100)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  maxHeatSlider = createSlider(0, 200, 100); //maxHeat
  maxHeatSlider.position(x + xoff, y + yoff);
  maxHeatSlider.style("width", "260px");
  msg = createP("maxHeat (0,200)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  falloffASlider = createSlider(70, 130, 100); //falloffA
  falloffASlider.position(x + xoff, y + yoff);
  falloffASlider.style("width", "260px");
  msg = createP("falloffA (pow)(70,130)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  falloffBSlider = createSlider(50, 100, 90); //falloffB
  falloffBSlider.position(x + xoff, y + yoff);
  falloffBSlider.style("width", "260px");
  msg = createP("falloffB (mult)(50,100)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  noise1octavesSlider = createSlider(1, 7, 1); //noise1octaves
  noise1octavesSlider.position(x + xoff, y + yoff);
  noise1octavesSlider.style("width", "260px");
  msg = createP("noise1 octaves");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  noise1freqSlider = createSlider(1, 100, 100); //noise1freq
  noise1freqSlider.position(x + xoff, y + yoff);
  noise1freqSlider.style("width", "260px");
  msg = createP("noise1 freq");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  noise2octavesSlider = createSlider(1, 7, 5); //noise2octaves
  noise2octavesSlider.position(x + xoff, y + yoff);
  noise2octavesSlider.style("width", "260px");
  msg = createP("noise2 octaves");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  noise2freqSlider = createSlider(1, 100, 50); //noise2freq
  noise2freqSlider.position(x + xoff, y + yoff);
  noise2freqSlider.style("width", "260px");
  msg = createP("noise2 freq");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  lerpnoisesvalSlider = createSlider(0, 100, 50); //lerpnoisesval
  lerpnoisesvalSlider.position(x + xoff, y + yoff);
  lerpnoisesvalSlider.style("width", "260px");
  msg = createP("lerpnoisesval (0,100)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  smoothKSlider = createSlider(0, 100, 50); //smoothK
  smoothKSlider.position(x + xoff, y + yoff);
  smoothKSlider.style("width", "260px");
  msg = createP("smoothK, blur (0,100)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  speedSlider = createSlider(0, 50, 20); //speed
  speedSlider.position(x + xoff, y + yoff);
  speedSlider.style("width", "260px");
  msg = createP("speed (0,200)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  updatePaletteButton = createButton("save settings");
  updatePaletteButton.position(x, y + yoff);
  updatePaletteButton.style("width", "260px");
  updatePaletteButton.mousePressed(setupSketch);
  //xoff += margin;
  yoff += margin;
  
  
  /*
  TEMPLATE
  Slider = createSlider(0, 100, 0); //desc
  Slider.position(x + xoff, y + yoff);
  Slider.style("width", "260px");
  msg = createP("text text");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  */
}