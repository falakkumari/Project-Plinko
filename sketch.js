const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240, 770, 480, 40)
    div1 = new Divisions(50, 700, 20, 100)
    div2 = new Divisions(150, 700, 20, 100)
    div3 = new Divisions(250, 700, 20, 100)
    div4 = new Divisions(350, 700, 20, 100)
    div5 = new Divisions(450, 700, 20, 100)
}

function draw() {
    background("yellow");
    Engine.update(engine);
    ground.display();
    div1.display();
    div2.display();
    div3.display();
    div4.display();
    div5.display();
  drawSprites();
}