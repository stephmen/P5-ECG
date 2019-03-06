
function setup() {

  PDownStart = createSlider(0,9,0,0.1)
  StartWave = createSpan()
  Ptop = createSlider(0,200)
  StopWave = createSpan()
  Pforce = createSlider(0,1,0.05,0.01)
  PendWave = createSpan()
  createCanvas(600, 360);
  clock()
  b = new Ball();

}

function draw() {
  StartWave.html(`${PDownStart.value()}`)
  StopWave.html(`${Ptop.value()}`)
  PendWave.html(`${Pforce.value()}`)
  background(220);
  b.grid()
  stroke(125)
  let PwaveDown = new createVector(0,Pforce.value())
  let PwaveUp = new createVector(0,Pforce.value()*-1)
  let Pendforce = new createVector(0,0)
  if ((b.windowTime / 1000) > PDownStart.value()) {
      b.applyForce(PwaveUp)}
    if(b.position.y  < Ptop.value()) {
      b.applyForce(PwaveDown)}
    if(b.position.y  < 0) {
      b.velocity.y = 0}


  b.update();
  b.display();
  b.line();
}
