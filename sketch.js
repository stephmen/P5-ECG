
function setup() {
  w = new waves;
  b = new Ball();
  w.wavePsetup()
  createCanvas(600, 360);
  clock()

}

function draw() {
  background(220);
  w.wavePdraw()
  w.wavePvector()
  b.grid()
  w.wavePupdate(b)
  b.update();
  b.display();
  b.line();
}
