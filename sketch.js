const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
var bp
var ball
var binn,bin1,bin2
var ran
var bat
var bin3
var w1,w2,w3

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    bp=new ball1(windowWidth/4,0)
    binn=new Box(windowWidth/1.35,windowHeight/1.52,5,windowWidth/7)
    bin1=new Box(windowWidth/1.21,windowHeight/1.52,5,windowWidth/7)
    bin3=new Boxy(windowWidth/1.27,windowHeight/1.52,windowWidth/8,windowWidth/7)
    bat=new Box(windowWidth/2,windowWidth/1.2,windowWidth,100)
    bin2=new Box(windowWidth/1.27,windowHeight/1.25,windowWidth/8,10)

    w1=new Box(windowWidth,windowHeight/2,20,windowHeight*2)
    w2=new Box(0,windowHeight/2,20,windowHeight*2)
    w3=new Box(windowWidth,windowHeight/1.2,windowWidth*2,7)

}

function draw(){
    background(0);
    Engine.update(engine);

    textSize(50)
    fill("cyan")
    text("↓",windowWidth/1.295,windowHeight/2.25)

    bp.display()
    binn.display()
    bin1.display()
    bin3.display()
    bat.display()
    w3.display()
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bp.Paper1,bp.Paper1.position,{x:155,y:-155})
    }
}

