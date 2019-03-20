class QRS extends waves {
  waveSetup() {
    this.start = createSlider(0, 9, 2, 0.1);
    this.startWave = createSpan();
    this.low = createSlider(200, 400, 220, 10);
    this.lowWave = createSpan();
    this.top = createSlider(0, 200, 140, 10);
    this.topWave = createSpan();
    this.force = createSlider(0, 2, 1, 0.01);
    this.forceWave = createSpan();
    this.Yvalue = createSpan();
    this.p = createP('');
    this.qLoop = false;
    this.rLoop = false;
    this.sLoop = false;
    this.qLoopUp = false;
    this.qUpX = 0;
    this.rDownX = 0;
    this.sUpX = 0;


  }
  waveDrawHTML(b) {
    this.startWave.html(`${this.start.value()}`)
    this.topWave.html(`${this.top.value()}`)
    this.lowWave.html(`${this.low.value()}`)
    this.forceWave.html(`${this.force.value()}`)
    this.Yvalue.html("       " + `${nf(b.vel.y,2,2)}`)
  }
  waveVector() {
    this.waveUp = new createVector(0, this.force.value() * -1)
    this.waveDown = new createVector(0, this.force.value())
    this.endforce = new createVector(0, 0)
    this.sForce = new createVector(0, 0.005)
    this.slowDown = new createVector(0, 0)
  }
  waveQRSUpdate(w) {

    // QRS Q going down
    this.w = w
    if ((pP.windowTime / 1000) > p.start.value() + this.start.value() && !this.qLoop) {
      this.w.vel.y = 4
      this.qLoop = true;
    }
    //QRS Q going up
    if (w.pos.y > this.low.value() && !this.qLoopUp) {
      w.applyForce(this.waveUp);
      this.qLoopUp = true
      if (Math.sign(w.vel.y) == -1) {
        this.qUpX = this.w.pos.x;
        console.log("QRS Q:" + this.qUpX);
      }
    }
    //QRS R going down
    if (w.pos.x > this.qUpX && w.pos.y < this.top.value() && this.qLoopUp && !this.rLoop) {
      this.w.vel.y = 0
      this.w.applyForce(this.waveDown);
      this.rLoop = true
      if (w.pos.y >= 200) {
        this.rDownX = this.w.pos.x
        console.log(this.rDownX)
        stroke(0);
        fill(175);
        ellipse(this.w.pos.x, this.w.pos.y, 10, 10)
      }
    }
    //S
    if (w.pos.x > this.rDownX && w.pos.y > this.low.value() && this.rLoop && !this.sLoop) {
      this.w.vel.y = 0
      this.w.applyForce(this.waveUp);
      this.sLoop = true
      if (w.pos.y >= 0) {
        this.sUpX = this.w.pos.x
        //console.log(this.sUpX)
      }
    }
    // S ending
    if(w.pos.y <= 202.7    && this.rLoop && this.sLoop  ){
        this.w.applyForce(this.slowDown);
        this.w.vel.y = 0;
        this.w.pos.y = 200;
        this.rLoop = true
        //this.waveUp.mult(0)
    }
    //   }
    // }
    // if(this.w.pos.y  <= 182 && this.rLoop  ) {
    //   this.w.vel.y = 0
    //   w.applyForce(this.waveUp);
    //   this.qLoop = true
    //   }

    // if(this.w.pos.y  >= 190 && this.rLoop  ) {
    //   this.w.vel.y = 0
    //   w.applyForce(this.waveUp);
    //   this.qLoop = true
    //   }

    // if(Math.sign(w.vel.y) == -1 && w.pos.y >= 199   ){
    //   w.applyForce(this.sForce*-1)
    //   //w.pos.y = 190
    //   //

    // }
  }
}