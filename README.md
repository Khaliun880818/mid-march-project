# mid-march-project

- Name: Helen Dorjderem
Title: Random Music Player
Reflection: Through this project, I wanted to solve a small problem that I was facing while taking online classes. I like to listen to music when I'm studying, I concentrate more with music. However, everytime when I change my music or the playlist ends, I get distracted because I have to look at my phone to change the music. Thus, I wanted to make a website where I can just click once and it gives me music until I want it to stop. That was my original plan, but after trying all different kinds of codes, I got to choose between two playlists, but the interaction needed from the user is still only a click.
#The challenges I faced while working on this project was that I found it quite hard to use both javascript and p5 at the same time. As if I only use one, I wasn't able to get the result I wanted, but if I use both, visual wise the website wouldn't look like my original plan. Also, it was challenging to use the functions of javascript, like onclick, onmousemove, on p5. 
These are the references for some of my code:
    p5.org/reference - 
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
    editor.p5s.org:
var r, b;
function setup() { 
  createCanvas(400, 400);
  r = color(255,0,0);
  b = color(0,0,255);
} 

function draw() { 
  var t = map(mouseX,0,width,0,1.0);
  var c = lerpColor(r,b,t);
  background(c);
}
