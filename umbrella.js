class Umbrella {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.circle(x, y, -100, options);

    this.image = loadImage("Walking Frame/walking_1.png");

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    // translate(pos.x, pos.y);
    rotate(angle);

    imageMode(CENTER);
    image(this.image, width / 2, height - 220, 500, 500);
  }
}
