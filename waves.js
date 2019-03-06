class waves {
  constructor() {
  }
  wavePsetup () {
  this.Pstart = createSlider(0,9,0,0.1)
  this.PstartWave = createSpan()
  this.Ptop = createSlider(0,200,150,10)
  this.PtopWave = createSpan()
  this.Pforce = createSlider(0,1,0.05,0.01)
  this.PforceWave = createSpan()
}
 wavePdraw(){
  this.PstartWave.html(`${this.Pstart.value()}`)
  this.PtopWave.html(`${this.Ptop.value()}`)
  this.PforceWave.html(`${this.Pforce.value()}`)
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