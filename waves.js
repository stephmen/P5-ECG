class waves {
  constructor() {
    this.Highest = 0
    this.loop = false
  }

  waveSetup () {
  this.start = createSlider(0,9,0,0.1)
  this.startWave = createSpan()
  this.top = createSlider(0,200,150,10)
  this.topWave = createSpan()
  this.force = createSlider(0,1,0.05,0.01)
  this.forceWave = createSpan()
  this.Yvalue = createSpan()
  this.Forcevalue = createSpan()
  this.p = createP('')

}
waveDrawHTML(b){
  this.startWave.html(`${this.start.value()}`)
  this.topWave.html(`${this.top.value()}`)
  this.forceWave.html(`${this.force.value()}`)
  this.Yvalue.html("       " + `${nf(b.velocity.y,2,2)}`)

 }
 waveVector(){
  this.waveUp = new createVector(0,this.force.value()*-1)
  this.waveDown = new createVector(0,this.force.value())
  this.endforce = new createVector(0,0)
 }
 waveUpdate(t){
    if((pP.windowTime / 1000) > this.start.value() && !this.loop){
    t.applyForce(this.waveUp)
    }
    if(t.position.y  < this.top.value()) {
    t.applyForce(this.waveDown)
    }
    if(Math.sign(t.velocity.y) == 1 && t.position.y >= this.top.value() && !this.loop ){
      t.applyForce(this.waveUp)
    }
    if(Math.sign(t.velocity.y) == 1 && t.position.y >= 199 ){
      t.applyForce(0,0)
      t.position.y = 200
      t.velocity.y = 0
      this.loop = true
    }
  }
}