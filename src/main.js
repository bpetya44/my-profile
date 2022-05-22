const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)
gsap.to('.logo', {duration: 2, x: 300})

//click to add
//press key to reset
let sArray = [];
let cArray = [];
let t;
let n = 400; //change for fun, but too many will be too much
function setup() {
  c = min(windowWidth, windowHeight);
  cnv = createCanvas(windowWidth, windowHeight);
  microR = c / 6;
  fill(225);
  for (let i = 0; i < n; i++) {
    sArray.push(new star());
  }
  noStroke();
  tmp = random(0, c / 3);
  cArray[0] = createVector(tmp, 0, c / 2 - tmp);
}

function draw() {
  t = TWO_PI * sin(frameCount / 4000);
  translate(width / 2, height / 2);
  background(0, 0, 0, 100);
  for (let i = 0; i < n; i++) {}
  for (let j = 0; j < cArray.length; j++) {
    push();
    translate(cArray[j].x, cArray[j].y);
    for (let i = 0; i < n; i++) {
      sArray[i].move(cArray[j].z);
    }
    pop();
  }
}

class star {
  constructor() {
    this.theta = randomGaussian(0, TWO_PI);
    this.r = 0;
    this.v = 0.001; //random(0.001,0.01)
  }
  move(microR) {
    if (this.r === 0) {
      this.r = random(0, microR);
    }
    this.r = this.r + 0.02;
    let r = this.r % microR;
    circle(r * sin(this.theta + t), r * cos(this.theta + t), min(3, r / 80));
  }
}
function mousePressed() {
  x = mouseX - width / 2;
  y = mouseY - height / 2;
  d = dist(x, y, 0, 0);
  cArray[cArray.length] = createVector(x, y, random(10, c));
}
function keyPressed() {
  cArray = [];
}
