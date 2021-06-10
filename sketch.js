const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, bgImg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(bg){
        background(bg)
    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var RJSON = await response.json();
    // write code slice the datetime
    var datetime = RJSON.datetime;
    var hour = datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=0 && hour<=3){
        bgImg = "sunset12.png";
    }
    else if(hour>=3 && hour<=4){
        bgImg = "sunrise1.png";
    }
    else if(hour>4 && hour<=5){
        bgImg = "sunrise2.png";
    }
    else if(hour>=5 && hour<=6){
        bgImg = "sunrise3.png";
    }
    else if(hour>=6 && hour<=9){
        bgImg = "sunrise4.png";
    }
    else if(hour>=9 && hour<=12){
        bgImg = "sunrise5.png";
    }
    else if(hour>=12 && hour<=16){
        bgImg = "sunrise6.png";
    }
    else if(hour>=16 && hour<=17){
        bgImg = "sunset7.png";
    }
    else if(hour>=17 && hour<=18){
        bgImg = "sunset8.png";
    }
    else if(hour>=18 && hour<=19){
        bgImg = "sunset10.png";
    }
    else if(hour>=19 && hour<=24){
        bgImg = "sunset11.png";
    }
    //load the image in backgroundImg variable here
    bg = loadImage(bgImg);
}
