
function setup() {
  pP = new Pointer();
  tP = new Pointer();
  qrsP = new Pointer();
  p = new waves(1.5,191,0.09);
  t = new waves(5,191,0.09);
  qrs = new QRS;
  p.waveSetup(pP)
  t.waveSetup(tP)
  qrs.waveSetup(qrsP)
  createCanvas(600, 360);
  clock()

}

function draw() {
  background(220);
  p.waveDrawHTML(pP);
  t.waveDrawHTML(tP);
  qrs.waveDrawHTML(qrsP);
  p.waveVector();
  t.waveVector();
  qrs.waveVector();
  p.waveUpdate(pP);
  t.waveUpdate(tP)
  qrs.waveQRSUpdate(qrsP)
  pP.update(p);
  tP.update(t);
  qrsP.update(qrs);
  pP.display();
  tP.display();
  qrsP.display();
  pP.line();
  tP.line()
  qrsP.line()
  pP.grid();
}
