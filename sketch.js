const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var drops = [];
var maxDrops = 50;
var player,thunder;
var thunder1,thunder2,thunder3,thunder4
var rand
function preload() {
  thunder1=loadImage("thunderbolt/1.png")
  thunder2=loadImage("thunderbolt/2.png")
  thunder3=loadImage("thunderbolt/3.png")
  thunder4=loadImage("thunderbolt/4.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(500, 800);
 player = new Umbrella(200,500);


}
function draw() {
  Engine.update(engine);
  background(0);
  for (var i = 0; i < drops.length; i++) {
    drops[i].display();
  }

  if (frameCount % 40 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      drops.push(new Drop(random(0, 500), random(0, -1000)));
    }
  }
  rand = Math.round(random(1,4));
  if(frameCount % 80 === 0) {
var thunder = createSprite(random(10,480),random(10,50),10,40);
    switch(rand) {
      case 1: thunder.addImage(thunder1);
              break;
      case 2: thunder.addImage(thunder2);
              break;
      case 3: thunder.addImage(thunder3);
              break;
      case 4: thunder.addImage(thunder4);
              break;
      default: break;
    }
    thunder.scale = 0.5;
    thunder.lifetime = 30
  }

  player.display();
  drawSprites()
}
