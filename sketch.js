var canvas;
var music;
var surface1,surface2,surface3,surface4;
var surface;
var box;
var Edges;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

     //create 4 different surfaces
     surface1=createSprite(30,600,200,50);
     surface1.shapeColor="green";
 
     surface2=createSprite(245,600,200,50);
     surface2.shapeColor="darkBlue";
 
     surface3=createSprite(465,600,200,50);
     surface3.shapeColor="black";

     surface4=createSprite(680,600,200,50);
     surface4.shapeColor="yellow";

    //create box sprite and give velocity
     box=createSprite(400,300,20,20);
     box.shapeColor="white";
     box.velocityX=4;
     box.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    
     //add condition to check if box touching surface and make it box
     if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="green"; 
        music.play();
     }

     if(surface2.isTouching(box) ){
        box.shapeColor="darkBlue"; 
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
     }

     if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="black"; 
     }
     
     if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="yellow"; 
     }

    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    box.display();
}
