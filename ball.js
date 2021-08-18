class Ball  {
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("assets/base.png");
    World.add(world, this.body);
    
      this.image = loadImage("assets/pingPongBall.png");
      this.smokeImage = loadImage("assets/smoke.png");
      this.trajectory =[];
    }
    
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 200, 300, 50, 50);
      pop();
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      //super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
  }