
let buffer1 = [];//processing buffer
let buffer2 = []; //processing buffer
let buffer3 = [];//render buffer


function render() {
  loadPixels();
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      let index = x+y*width; 
      let val = buffer3[index];
      buffer1[index] = val;
      buffer2[index] = 0;
      buffer3[index] = 0;
      let col = palette[round(val*100)];
      
      for (let j = 0; j < res; j++) {
        for (let i = 0; i < res; i++) {
          set(x+i,y+j,col);
        }
      }
    }
  }
  updatePixels();
  //arrayCopy(buffer3,buffer1);//next frame's processing buffer
}
