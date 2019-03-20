class waves {
  constructor(start,top,force) {
    this.start = start;
    this.top = top;
    this.force = force;
    this.Highest = 0;
    this.qLoop = false;
  }

  waveSetup () {
  this.start = createSlider(0,9,this.start,0.1);
  this.startWave = createSpan();
  this.top = createSlider(0,200,this.top,1);
  this.topWave = createSpan();
  this.force = createSlider(0,1,this.force,0.01);
  this.forceWave = createSpan();
  this.Yvalue = createSpan();
  this.Forcevalue = createSpan();
  this.p = createP('');

}
waveDrawHTML(b){
  this.startWave.html(`${this.start.value()}`)
  this.topWave.html(`${this.top.value()}`)
  this.forceWave.html(`${this.force.value()}`)
  this.Yvalue.html("       " + `${nf(b.vel.y,2,2)}`)

 }
 waveVector(){
  this.waveUp = new createVector(0,this.force.value()*-1)
  this.waveDown = new createVector(0,this.force.value())
  this.endforce = new createVector(0,0)
 }
 waveUpdate(w){
    if((pP.windowTime / 1000) > this.start.value() && !this.qLoop){
    w.applyForce(this.waveUp.add(0,-4).mult(0.1));
    w.applyForce(this.waveDown)
    this.qLoop = true;
  }
    //if(w.pos.y  <= this.top.value()) {
    //w.pos.y = 150 }
    // if(Math.sign(w.vel.y) == 1 && w.pos.y >= this.top.value() && !this.qLoop ){
    //   w.applyForce(this.waveUp)
    // }
    // if(Math.sign(w.vel.y) == 1 && w.pos.y >= 199 ){
    //   w.applyForce(0,0)
    //   w.pos.y = 200
    //   w.vel.y = 0
    //   this.qLoop = true
    // }
  }

}

