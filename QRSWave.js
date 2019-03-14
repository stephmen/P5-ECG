class QRS extends waves {
  waveSetup () {
    this.start = createSlider(0,9,4,0.1)
    this.startWave = createSpan()
    this.top = createSlider(0,200,170,10)
    this.topWave = createSpan()
    this.force = createSlider(0,2,2,0.01)
    this.forceWave = createSpan()
    this.Yvalue = createSpan()
    this.p = createP('')
    this.rLoop = false
    this.qLoop = false

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
  this.rForce = new createVector(0,(1.5*-1))
   }
   waveQRSUpdate(w){
      if((pP.windowTime / 1000) > this.start.value() && !this.loop){
      w.applyForce(this.waveUp);
      this.loop = true;
      }
      if(w.position.y  < this.top.value() && !this.qLoop) {
      w.applyForce(this.waveDown);
      this.qLoop = true
      }
      // if(Math.sign(w.velocity.y) == 1 && w.position.y >= this.top.value() && !this.loop ){
      //   //w.applyForce(this.waveUp)
      // }
      if(w.position.y > 200 && !this.rLoop ){
        w.applyForce(this.rForce)
        this.rLoop = true

      }

      // if(Math.sign(w.velocity.y) == -1 && w.position.y >= 199   ){
      //   w.applyForce(this.sForce*-1)
      //   //w.position.y = 190
      //   //w.velocity.y = 0

      // }
    }
  }
