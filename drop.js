class Drop {
  constructor(x, y) {
    var options = {
      friction: 0.1,
      density: 1,
    };
    this.body = Bodies.circle(x, y, 3, options);
    this.radius = 3;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
    stroke("black");
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
