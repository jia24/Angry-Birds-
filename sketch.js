const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird1,pig1,log1,ground,box2,box3,box4,log2,pig2,box5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,70,70);
    box2 = new Box(900,550,70,70);
    box3 = new Box(700,420,70,70);
    box4 = new Box(900,420,70,70);
    box5 = new Box(800,350,70,70);
    bird1 = new Bird(200,250);
    pig1 = new Pig(805,550);
    pig2 = new Pig(790,455);
    log1 = new Log(800,470,300,20,PI);
    log2 = new Log(800,400,300,20,PI);
    ground = new Ground(600,600,1200,20);
}

function draw(){
    background(0);
    text(mouseX + "," + mouseY,200,20);
    Engine.update(engine);
    box1.display();
    pig1.display();
    bird1.display();
    log1.display();
    ground.display();
    box2.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    
   
}