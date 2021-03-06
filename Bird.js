class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trail = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    
    console.log(this.trajectory);
    if(this.body.position.x > 200 && this.body.velocity.x > 1){
      var position = [this.body.position.x, this.body.position.y]
      this.trajectory.push(position);
    }
    for(var i = 0; i < this.trajectory.length; i++){
      image(this.trail, this.trajectory[i][0], this.trajectory[i][1]);
    }

    
  }
}
