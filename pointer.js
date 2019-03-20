
class Pointer {
  constructor() {
    this.pos = new createVector(0, 200);
    this.vel = new createVector(1, 0);
    this.acc   = new createVector(0,0)
    this.force = new createVector()
    this.records = []
    this.count = 0
    this.windowTime = 0
    this.previousWindowmillis = 0
  }

  applyForce(force){
    this.acc.add(force);
  }

  update(w) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);


    if (this.pos.x >= width) {
       this.pos.x = 0
       this.pos.y =200
       this.vel.y = 0
       this.acc.set(0,0)
       this.force.set(0,0)
       this.count = 0
       this.previousWindowmillis = millis()
       w.loop = false
       w.qLoop = false
       w.qLoopUp = false
       w.rLoop = false
       w.sLoop = false
    }
    this.windowTime = floor(millis() - this.previousWindowmillis);
    this.records[this.count] = ([int(this.pos.x),int(this.pos.y)])
    this.count ++
    this.frameSec = select('#frameSec');
    this.frameSec.html(this.windowTime /1000)

  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
  line(){
      stroke(4)
      noFill()
      beginShape()
      for (let i=0 ; i < this.records.length; i++){
        vertex(this.records[i][0],this.records[i][1])
      }
      endShape()
  }
  grid(){
    stroke(255,100,100)
    for (let i=0 ; i < 600 ; i += 60){
      line(i,0,i,height)
    }
    stroke(200,75,75)
    for (let j=0 ; j < height ; j += 10){
    line(0,j,width,j)
    }
    stroke(0)
    line(0,200,width,200)
}
}
