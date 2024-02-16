function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  noStroke();
  
  //bike wheels
  ellipseMode(CORNER);
  const size = width * 0.3;
  fill('red');
  ellipse((width/2)+40, (height/2)+40, size, size);
  fill('yellow');
  ellipse((width/2)-80, (height/2)-80, size,size);

  //bike middle
  fill('green');
  beginShape();
  vertex(297, 103);
  vertex(215, 275);
  vertex(344, 180);
  endShape(CLOSE);

  //hill
  fill('orange');
  beginShape();
  vertex(0, 400);
  vertex(0, 85);
  vertex(315, 400);
  endShape(close);
  
  /*
  hill line
  stroke('red');
  line(0, 85, 315, 400);
  */
}
