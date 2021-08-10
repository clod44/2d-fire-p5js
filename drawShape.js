function drawShape() {
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height){
    return;
  }
  let shapeSize = 50;
  noiseDetail(5,0.5);
  for (let y = max(0,round((mouseY-shapeSize)/float(res))*res);
       y < min(height,round((mouseY+shapeSize)/float(res))*res); y+=res) {
    for (let x = max(0,round((mouseX-shapeSize)/float(res))*res);
         x < min(width,round((mouseX+shapeSize)/float(res))*res); x+=res) {
      let temp = noise(x*0.01,(y+xoff)*0.01);
      buffer1[x+y*width] = temp;
      buffer2[x+y*width] = temp;
      buffer3[x+y*width] = temp;
      //print("a");
    }
  }
  //print(random());
}

