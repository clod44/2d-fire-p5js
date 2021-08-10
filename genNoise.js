let noise1octaves;
let noise1freq;
let noise2octaves;
let noise2freq;
let speed;

let xoff = 0;
function genNoiseMap() {
  
    for (let x = 0; x < width; x += res) {
      noiseDetail(noise1octaves, noise1freq);
      let temp1 = getNoise(x,xoff);
      noiseDetail(noise2octaves, noise2freq);
      let temp2 = getNoise(x,xoff);
      buffer1[x + (height-res*3) * width] +=  lerp(temp1,temp2,lerpnoisesval);
    }
  xoff += speed * res;
}


function getNoise(x,y) {
  return noise(x*0.01,y*0.01);
}