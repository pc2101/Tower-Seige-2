const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
//var block1,block2,block3,block4,block5,


function preload()
{
// load
}

function setup()
{
    createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world

     ground = new Ground(650,590,1300,30);
     stand1 = new Ground(650,400,300,20);
     stand2 = new Ground(1050,270,230,20);

     // firstFloor blocks 

     
     block1 = new Block(565,380,35,45);
     block2 = new Block(595,380,35,45);
     block3 = new Block(625,380,35,45);
     block4 = new Block(665,380,35,45);
     block5 = new Block(700,380,35,45);
     block6 = new Block(735,380,35,45);
     // second floor
     block7 = new Block(595,340,35,45);
     block8 = new Block(630,340,35,45);
     block9 = new Block(665,340,35,45);
     block10 = new Block(700,340,35,45);
     //third floor
     block11 = new Block(610,310,35,45);
     block12 = new Block(645,310,35,45);
     block13 = new Block(680,310,35,45);
     //fourth floor
     block14 = new Block(645,250,35,45);
     // 2nd stand first floor
     block15 = new Block(995,250,35,45);
     block16 = new Block(1030,250,35,45);
     block17 = new Block(1065,250,35,45);
     block18 = new Block(1100,250,35,45);
     // 2nd stand second floor
     block19 = new Block(1010,200,35,45);
     block20=new Block(1045,200,35,45)
     block21 = new Block(1080,200,35,45);
     // last floor block of 2nd stand 
     block22 = new Block(1045,150,35,45);

     poly = new Polygon(200,300,30);
     sling = new SlingShot(poly.body,{x:200,y:100})

     Engine.run(engine);
}

function draw()
{
    
    background("orange");
    
    textSize(25);
    text("Drag The Hexagonal Stone And Release It Towards The Blocks",300,100);
    text("Press 'space' to get another chance",300,150);
    

    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    fill("lightgreen");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    fill("violet")
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    fill("cyan");
    block11.display();
    block12.display();
    block13.display();
    fill("red");
    block14.display();
    fill("purple");
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    fill("green");
    block19.display();
    block20.display();
    block21.display();
    fill("yellow")
    block22.display();
    sling.display();
    poly.display();
}
function mouseDragged()
{
	Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
	sling.fly();
}
function keyPressed()
{
    if(keyCode === 32)
    {
        sling.attach(poly.body);
    }
}
