let angle = 0;
let r;
let b;
function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
  r = color('#7785F9');
  b = color('#FCAFE1');

}
function draw(){
  let t = map(mouseX,0,width,0,1.0);
  let c = lerpColor(r,b,t);
	fill('#9D9A9B');
	push();
	translate(windowWidth/2, windowHeight/2);
	rotate(angle);
	fill(c);
	strokeWeight(1);
	circle(0, 0, 500);
	stroke('black');
	strokeWeight(4);
  line(0, 0, 0, 250);
  pop();
	circle(windowWidth/2, windowHeight/2, 125)
	fill('#F3E9EE');
	circle(windowWidth/2, windowHeight/2, 110);
	fill('#C3EAE3');
	circle(windowWidth/2, windowHeight/2, 100);
  angle = angle +1;

	}
