class waves {
  constructor() {
    this.Highest = 0
  }
  wavePsetup () {
  this.Pstart = createSlider(0,9,0,0.1)
  this.PstartWave = createSpan()
  this.Ptop = createSlider(0,200,150,10)
  this.PtopWave = createSpan()
  this.Pforce = createSlider(0,1,0.05,0.01)
  this.PforceWave = createSpan()
  this.Yvalue = createSpan()
  this.Forcevalue = createSpan()

}
 wavePdraw(b){
  this.PstartWave.html(`${this.Pstart.value()}`)
  this.PtopWave.html(`${this.Ptop.value()}`)
  this.PforceWave.html(`${this.Pforce.value()}`)
  this.Yvalue.html("       " + `${nf(b.velocity.y,2,2)}`)

 }
 wavePvector(){
  this.PwaveUp = new createVector(0,this.Pforce.value()*-1)
  this.PwaveDown = new createVector(0,this.Pforce.value())
  this.Pendforce = new createVector(0,0)
 }
 wavePupdate(b){

  if ((b.windowTime / 1000) > this.Pstart.value()){
    b.applyForce(this.PwaveUp)}

    if(b.position.y  < this.Ptop.value()) {
    b.applyForce(this.PwaveDown)}

}
}
