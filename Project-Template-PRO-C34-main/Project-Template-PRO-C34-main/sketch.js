const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28

function preload() {
  bg = loadImage("gamingbackground2.png");
 heroimg = loadImage("superhero1.png")
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  box4 = new Box(800, 100, 70, 70);
  block2 = new Box(900, 170, 70, 70);
  block3 = new Box(900, 210, 70, 70);
  block4 = new Box(900, 280, 70, 70);
  block5 = new Box(900, 350, 70, 70);
  block6 = new Box(900, 420, 70, 70);
  block7 = new Box(900, 490, 70, 70);
  block8 = new Box(900, 560, 70, 70);
  block11 = new Box(600, 170, 70, 70);
  block12 = new Box(600, 210, 70, 70);
  block13 = new Box(600, 280, 70, 70);
  block14 = new Box(600, 350, 70, 70);
  block15 = new Box(600, 420, 70, 70);
  block16 = new Box(600, 490, 70, 70);
  block17 = new Box(600, 560, 70, 70);
  block18 = new Box(700, 170, 70, 70);
  block19 = new Box(700, 210, 70, 70);
  block20 = new Box(700, 280, 70, 70);
  block21 = new Box(700, 350, 70, 70);
  block22 = new Box(700, 420, 70, 70);
  block23 = new Box(700, 490, 70, 70);
  block24 = new Box(700, 560, 70, 70);
  block25 = new Box(800, 170, 70, 70);
  block9 = new Box(800, 210, 70, 70);
  block10 = new Box(800, 280, 70, 70);
  block1 = new Box(800, 350, 70, 70);
  block26 = new Box(800, 420, 70, 70);
  block27 = new Box(800, 490, 70, 70);
  block28 = new Box(800, 560, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
 
  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){

    Matter.Body.setPosition(hero.body,  {x: mouseX, y: mouseY} );
  

  }
