
function setup() {
  pP = new Pointer();
  q = new Pointer();
  p = new waves;
  qrs = new waves;
  p.waveSetup(pP)
  qrs.waveSetup(q)
  createCanvas(600, 360);
  clock()

}

function draw() {
  background(220);
  p.waveDrawHTML(pP);
  qrs.waveDrawHTML(q);
  p.waveVector();
  qrs.waveVector();
  p.waveUpdate(pP);
  qrs.waveUpdate(q)
  pP.update(p);
  q.update(qrs);
  pP.display();
  q.display();
  pP.line();
  q.line()
  pP.grid();
  //p.loop = true;
}
