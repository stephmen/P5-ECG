
function setup() {
  b = new Ball();
  w = new waves;

  w.wavePsetup(b)
  createCanvas(600, 360);
  clock()

}

function draw() {
  background(220);
  w.wavePdraw(b)
  w.wavePvector()
  w.wavePupdate(b)
  b.grid()
  b.update(w);
  b.display();
  b.line();
}
