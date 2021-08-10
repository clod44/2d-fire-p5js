//fall off effect
let falloffA = 0.8;
let falloffB = 0.95;
function doFallOff() {
  for (let y = 0; y < height-res; y += res) {
    for (let x = 0; x < width; x += res) {
      
      //buffer2[x+y*width] = buffer1[x+y*width];
      let avg = (buffer1[x+(y-res)*width] +
                 buffer1[(x-res)+y*width] + 
                 buffer1[(x+res)+y*width] + 
                 buffer1[x+(y+res)*width]) / 4.0;
      buffer2[x+y*width] = pow(lerp(buffer1[x+y*width],avg,smoothK),
                               falloffA) * falloffB;  
      
    }
  }
}

function moveBuffer(){
  for (let y = res; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      buffer3[x+(y-res)*width] = buffer2[x+y*width];                      
    }
  }
}