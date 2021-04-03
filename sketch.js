const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles= [];
var plinkos = [];
var divisions= [];
var gameState= "play";
var particle;
var count=0;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  particle= new Particle(mouseX, 100,10, 10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions (k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
  
}
 


function draw() {
  background("black");
  



  textSize(20);
  fill("white");
  text("Score : "+score,20,30);


  text("500",20,650);
  text("500",110,650);
  text("500",190,650);
  text("500",270,650);
  text("100",350,650);
  text("100 ",430,650);
  text("100 ",510,650);
  text("200",590,650);
  text("200 ",670,650);
  text("200", 740,650);

  
  Engine.update(engine);
 
  
  if (gameState==="play"){
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     count++
    
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 

   if (particle!==null){
     particle.display();

     if (particle.body.position.y>760){
       if (particle.body.position.x<300){
         score=score+500
         particle=null;
       }
       }

       if (particle.body.position.x<600){
        if (particle.body.position.x>301){
        score=score+100
        particle=null;
      }
    }
       if (particle.body.position.x<900){
       if (particle.body.position.x>601){
        score=score+200
        particle=null;
      }
     }
    }


   if (count>=5) {
    gameState= "end";
  }
  
  } 

  if (gameState==="end"){
    textSize(45);
    text("Game Over!", 250, 400);



 

  }

  
   







   strokeWeight(5);
  stroke("yellow");
  line(0,450,3000,450);
}

// function mousePressed(){
//   if (gameState!=="end"){
//     particle= new Particle(300, 10,10, 10);
//   }

// }