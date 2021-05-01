// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;
let xStep = 0;
let fps = 12;

//et capturer = new CCapture({ format: 'png', framerate: fps });

function setup() {
  createCanvas(400, 400);
  frameRate(50);
  c1 = color(232, 37, 37);
  c2 = color(39, 47, 185);
}


function draw() {
  
  //Background;
  push();
    clear();
    translate(xStep,0);
    setGradient(-width, 0, width, height, c1, c2, X_AXIS);
    setGradient(0, 0, width, height, c1, c2, X_AXIS);
    if (frameCount % 400 == 0){
        xStep = 0;
    }else{
       xStep++;  
    }
    
  pop();
  
  translate((-width/3.25), 0);
  for (let i = 1; i <=3; i++) {
    let lineX = (i * (width * 0.15)) + (i * (width * 0.20));
    setGradient( lineX , height*0.1, width*0.2, height*0.8, c2, c1, X_AXIS);
  }
  
  if (frameCount === 1) {
    // start the recording on the first frame
    // this avoids the code freeze which occurs if capturer.start is called
    // in the setup, since v0.9 of p5.js
    //capturer.start();
  }

  if (frameCount === 400) {
    //noLoop();
    //console.log('finished recording.');
    //capturer.stop();
    //capturer.save();
    return;
  }

  // handle saving the frame
  //console.log('capturing frame');
  //capturer.capture(document.getElementById('defaultCanvas0'));

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
