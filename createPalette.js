let palette = [];
let colorQuality = 3000;
let minHeat = 0;
let maxHeat = 1;
function createPalette() {
  //one time computing
  let heatValue = 0.0;
  let low = color(0, 255, 0); //init
  let high = color(0, 255, 0); //init
  let lerpVal = 0;

  let col = [
    [color(0, 0, 0), map(0.0, 0, 1, minHeat, maxHeat)],
    [color(52, 0, 137), map(0.1, 0, 1, minHeat, maxHeat)],
    [color(188, 3, 142), map(0.35, 0, 1, minHeat, maxHeat)],
    [color(235, 79, 10), map(0.6, 0, 1, minHeat, maxHeat)],
    [color(251, 184, 0), map(0.9, 0, 1, minHeat, maxHeat)],
    [color(255, 255, 255), map(1, 0, 1, minHeat, maxHeat)],
  ];

  let colLength = col.length;
  let heatValueINT;

  for (var i = 0; i < colorQuality + 1; i++) {
    heatValueINT = heatValue * 100;
    for (var j = 1; j < colLength; j++) {
      if (col[j][1] > heatValueINT) {
        low = col[j - 1][0];
        high = col[j][0];
        lerpVal = map(heatValueINT, col[j - 1][1], col[j][1], 0, 1);
        j = colLength;
      }
    }

    palette[i] = lerpColor(low, high, lerpVal);
    heatValue = float(i) / colorQuality;
  }
  //print(palette);
}