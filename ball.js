

class Ball {
  constructor() {
    this.position = new createVector(0, 200);
    this.velocity = new createVector(1, 0);
    this.acceleration   = new createVector()
    this.force = new createVector()
    this.records = []
    this.count = 0
    this.windowTime = 0
    this.previousWindowmillis = 0
  }

  applyForce(force){
    this.acceleration = force;
  }

  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity);



    if (this.position.x >= width) {
       this.position.x = 0
       this.position.y =200
       this.velocity.y = 0
       this.acceleration = 0
       this.force = 0
       this.count = 0
       this.previousWindowmillis = millis()
    }
    this.windowTime = floor(millis() - this.previousWindowmillis);
    this.records[this.count] = ([int(this.position.x),int(this.position.y)])
    this.count ++
    this.frameSec = select('#frameSec');
    this.frameSec.html(this.windowTime /1000)
  }

  display() {
    // Display circle at x position
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, 10, 10);
  }
  line(){
      stroke(0)
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
    for (let j=0 ; j < height ; j += 30){
    line(0,j,width,j)
    }
    stroke(0)
    line(0,200,width,200)
}
}
