class html {

  waveControls () {
  this.start = createSlider(0,9,0,0.1)
  this.startWave = createSpan()
  this.top = createSlider(0,200,150,10)
  this.topWave = createSpan()
  this.force = createSlider(0,1,0.05,0.01)
  this.forceWave = createSpan()
  this.Yvalue = createSpan()
  this.Forcevalue = createSpan()

}
waveDrawHTML(b){
  this.startWave.html(`${this.start.value()}`)
  this.topWave.html(`${this.top.value()}`)
  this.forceWave.html(`${this.force.value()}`)
  this.Yvalue.html("       " + `${nf(b.velocity.y,2,2)}`)

 }
}